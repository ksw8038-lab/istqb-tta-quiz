// app.js - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app-root');
    const pageTitle = document.getElementById('page-title');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Router State
    let currentRoute = 'dashboard';
    
    // Quiz State
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let quizActive = false;
    let timerInterval = null;
    let timeRemaining = 120 * 60; // 120 minutes in seconds

    // Initialize App
    init();

    function init() {
        bindNavEvents();
        renderRoute(currentRoute);
    }

    function bindNavEvents() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = e.currentTarget.dataset.route;
                
                if (quizActive && route !== 'quiz') {
                    if(!confirm('모의고사가 진행 중입니다. 페이지를 나가시겠습니까? 진행 상황이 손실됩니다.')) return;
                    resetQuiz();
                }

                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                currentRoute = route;
                renderRoute(route);
            });
        });
    }

    function renderRoute(route) {
        // Trigger exit animation
        appRoot.classList.remove('page-transition');
        void appRoot.offsetWidth; // trigger reflow
        appRoot.classList.add('page-transition');

        switch(route) {
            case 'dashboard':
                pageTitle.innerText = '대시보드';
                renderDashboard();
                break;
            case 'study':
                pageTitle.innerText = '학습 자료';
                renderStudy();
                break;
            case 'quiz':
                pageTitle.innerText = '실전 모의고사';
                if (!quizActive && userAnswers.length === 0) {
                    renderQuizStart();
                } else {
                    renderQuizQuestion();
                }
                break;
            case 'results':
                pageTitle.innerText = '나의 결과 (오답노트)';
                renderResults();
                break;
        }
    }

    // --- DASHBOARD ---
    function renderDashboard() {
        appRoot.innerHTML = `
            <div class="dashboard-grid">
                <div class="card glass-panel stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-list-check"></i></div>
                    <div class="stat-info">
                        <h3>응시한 모의고사</h3>
                        <p>${userState.totalQuizzesTaken}회</p>
                    </div>
                </div>
                <div class="card glass-panel stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-bullseye"></i></div>
                    <div class="stat-info">
                        <h3>평균 점수</h3>
                        <p>${userState.averageScore}점</p>
                    </div>
                </div>
                <div class="card glass-panel stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-award"></i></div>
                    <div class="stat-info">
                        <h3>최근 점수</h3>
                        <p>${userState.lastScore}점</p>
                    </div>
                </div>
            </div>
            
            <div class="card glass-panel" style="margin-top: 2rem;">
                <h2 style="margin-bottom: 1.5rem; font-weight: 600;">최근 학습한 챕터</h2>
                <div class="options-list">
                    ${syllabusTopics.slice(0,2).map(topic => `
                        <div class="option-btn" style="cursor: default;">
                            <i class="fa-solid ${topic.icon}" style="color: var(--accent); width: 24px;"></i>
                            <div>
                                <h4 style="margin-bottom: 0.25rem;">${topic.title}</h4>
                                <span style="font-size: 0.875rem; color: var(--text-secondary);">${topic.desc.substring(0, 50)}...</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 1.5rem;">
                    <button class="btn" onclick="document.querySelector('[data-route=study]').click()">학습 이어하기</button>
                </div>
            </div>
        `;
    }

    // --- STUDY MATERIALS ---
    function renderStudy() {
        appRoot.innerHTML = `
            <div class="study-grid">
                ${syllabusTopics.map(topic => `
                    <div class="card glass-panel study-card">
                        <h3><i class="fa-solid ${topic.icon}"></i> ${topic.title}</h3>
                        <p>${topic.desc}</p>
                        <button class="btn btn-secondary read-chapter-btn" data-id="${topic.id}">챕터 학습하기</button>
                    </div>
                `).join('')}
            </div>
        `;

        document.querySelectorAll('.read-chapter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const topicId = e.currentTarget.dataset.id;
                renderChapterView(topicId);
            });
        });
    }

    function renderChapterView(topicId) {
        const topic = syllabusTopics.find(t => t.id === topicId);
        if (!topic) return;
        
        appRoot.innerHTML = `
            <div class="card glass-panel" style="max-width: 800px; margin: 0 auto;">
                <button class="btn btn-secondary" id="back-to-study" style="margin-bottom: 2rem;">
                    <i class="fa-solid fa-arrow-left"></i> 학습 자료 목록으로
                </button>
                <h2 style="color: var(--accent); margin-bottom: 1.5rem;">${topic.title}</h2>
                <div style="line-height: 1.8; color: var(--text-primary); font-size: 1.05rem;">
                    ${topic.content || '<p>내용을 준비 중입니다...</p>'}
                </div>
            </div>
        `;

        document.getElementById('back-to-study').addEventListener('click', () => {
            renderStudy();
        });
    }

    // --- QUIZ LOGIC ---
    function renderQuizStart() {
        appRoot.innerHTML = `
            <div class="card glass-panel" style="max-width: 600px; margin: 0 auto; text-align: center; padding: 3rem 2rem;">
                <i class="fa-solid fa-stopwatch" style="font-size: 4rem; color: var(--accent); margin-bottom: 1.5rem;"></i>
                <h2 style="margin-bottom: 1rem;">TTA 실전 모의고사</h2>
                <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">
                    이 모의고사는 모든 챕터를 포함하여 총 ${quizQuestions.length}문제로 구성되어 있습니다.<br> 
                    제한 시간은 120분입니다. 준비되셨나요?
                </p>
                <button class="btn" id="start-quiz-btn" style="font-size: 1.125rem; padding: 1rem 2rem;">시험 시작하기</button>
            </div>
        `;
        
        document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    }

    function startQuiz() {
        quizActive = true;
        currentQuestionIndex = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        timeRemaining = 120 * 60;
        
        startTimer();
        renderQuizQuestion();
    }

    function resetQuiz() {
        quizActive = false;
        clearInterval(timerInterval);
        currentQuestionIndex = 0;
        userAnswers = [];
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            if (timeRemaining <= 0) {
                finishQuiz();
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        const timerEl = document.getElementById('quiz-timer');
        if (timerEl) {
            timerEl.innerText = formatTime(timeRemaining);
            if (timeRemaining < 300) { // less than 5 min
                timerEl.style.color = 'var(--danger)';
            }
        }
    }

    function renderQuizQuestion() {
        const q = quizQuestions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        const currentAnswer = userAnswers[currentQuestionIndex];
        
        const isAnswered = currentAnswer !== null;

        appRoot.innerHTML = `
            <div class="quiz-container">
                <div class="progress-container">
                    <div class="progress-text">
                        <span>문제 ${currentQuestionIndex + 1} / ${quizQuestions.length}</span>
                        <span id="quiz-timer" style="font-weight: 600; font-variant-numeric: tabular-nums;">${formatTime(timeRemaining)}</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="card glass-panel">
                    <div class="question-text" style="word-break: keep-all;">
                        ${q.question.replace(/\n/g, '<br>')}
                    </div>
                    
                    <div class="options-list" id="options-container">
                        ${q.options.map((opt, idx) => {
                            let btnClass = 'option-btn';
                            let icon = '<i class="fa-regular fa-circle"></i>';
                            
                            if (isAnswered) {
                                if (idx === q.correctAnswer) {
                                    btnClass += ' correct';
                                    icon = '<i class="fa-solid fa-circle-check"></i>';
                                } else if (idx === currentAnswer) {
                                    btnClass += ' wrong';
                                    icon = '<i class="fa-solid fa-circle-xmark"></i>';
                                }
                            }

                            return `
                                <button class="${btnClass}" data-index="${idx}" ${isAnswered ? 'disabled' : ''}>
                                    ${icon} ${opt}
                                </button>
                            `;
                        }).join('')}
                    </div>

                    ${isAnswered ? `
                        <div class="rationale-box">
                            <h4><i class="fa-solid fa-lightbulb"></i> 해설</h4>
                            <p>${q.rationale}</p>
                        </div>
                    ` : ''}

                    <div class="quiz-actions">
                        ${isAnswered ? `
                            ${currentQuestionIndex < quizQuestions.length - 1 
                                ? `<button class="btn" id="next-btn">다음 문제 <i class="fa-solid fa-arrow-right"></i></button>`
                                : `<button class="btn" id="finish-btn">시험 종료 <i class="fa-solid fa-flag-checkered"></i></button>`
                            }
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // Bind option clicks
        if (!isAnswered) {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selectedIdx = parseInt(e.currentTarget.dataset.index);
                    userAnswers[currentQuestionIndex] = selectedIdx;
                    renderQuizQuestion(); // re-render to show correct/wrong and rationale
                });
            });
        }

        // Bind next/finish
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            renderQuizQuestion();
        });

        const finishBtn = document.getElementById('finish-btn');
        if (finishBtn) finishBtn.addEventListener('click', finishQuiz);
    }

    function finishQuiz() {
        quizActive = false;
        clearInterval(timerInterval);
        document.querySelector('[data-route=results]').click();
    }

    // --- RESULTS ---
    function renderResults() {
        if (userAnswers.length === 0 || (!userAnswers.includes(0) && !userAnswers.includes(1) && !userAnswers.includes(2) && !userAnswers.includes(3))) {
            appRoot.innerHTML = `
                <div class="card glass-panel" style="text-align: center; padding: 4rem 2rem;">
                    <i class="fa-solid fa-chart-pie" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1.5rem;"></i>
                    <h2>아직 결과가 없습니다</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">모의고사를 완료하면 결과를 확인할 수 있습니다.</p>
                    <button class="btn" onclick="document.querySelector('[data-route=quiz]').click()">모의고사 보러가기</button>
                </div>
            `;
            return;
        }

        let correctCount = 0;
        let incorrectQuestions = [];

        userAnswers.forEach((ans, idx) => {
            if (ans === quizQuestions[idx].correctAnswer) {
                correctCount++;
            } else {
                incorrectQuestions.push({q: quizQuestions[idx], userAns: ans});
            }
        });

        const score = Math.round((correctCount / quizQuestions.length) * 100);
        
        // Update user state
        userState.totalQuizzesTaken++;
        userState.lastScore = score;
        userState.averageScore = Math.round(((userState.averageScore * (userState.totalQuizzesTaken - 1)) + score) / userState.totalQuizzesTaken);

        appRoot.innerHTML = `
            <div class="results-header">
                <div class="score-circle">
                    <span style="font-size: 1rem; font-weight: 500; color: var(--text-secondary); margin-bottom: -10px;">내 점수</span>
                    ${score}점
                </div>
                <h2>${score >= 65 ? '합격 🎉' : '불합격 😢'} (합격 기준: 65점)</h2>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">총 ${quizQuestions.length}문제 중 ${correctCount}문제를 맞췄습니다.</p>
            </div>
            
            ${incorrectQuestions.length > 0 ? `
                <div class="card glass-panel">
                    <h3 style="margin-bottom: 1.5rem; color: var(--danger);"><i class="fa-solid fa-triangle-exclamation"></i> 오답 노트</h3>
                    <div class="options-list">
                        ${incorrectQuestions.map(item => `
                            <div style="padding: 1.5rem; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius: var(--border-radius); margin-bottom: 1rem;">
                                <h4 style="margin-bottom: 1rem; line-height: 1.6; word-break: keep-all;">${item.q.question.replace(/\n/g, '<br>')}</h4>
                                <p style="color: var(--danger); margin-bottom: 0.5rem;"><strong>나의 답안:</strong> ${item.userAns !== null ? item.q.options[item.userAns] : '선택 안 함'}</p>
                                <p style="color: var(--success); margin-bottom: 1rem;"><strong>정답:</strong> ${item.q.options[item.q.correctAnswer]}</p>
                                <div class="rationale-box" style="margin-top: 0;">
                                    <h4 style="color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> 해설</h4>
                                    <p>${item.q.rationale}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : `
                <div class="card glass-panel" style="text-align: center; color: var(--success);">
                    <h3>만점입니다! 🎉</h3>
                    <p>학습 내용을 완벽하게 이해하셨습니다.</p>
                </div>
            `}
        `;
        
        // Clear current quiz data
        userAnswers = [];
    }
});
