// data.js - ISTQB Advanced Level TTA (v4.0)

const syllabusTopics = [
    {
        id: "ch1",
        title: "1. 리스크 기반 테스팅에서의 TTA 역할",
        desc: "기술적 리스크를 식별하고, 평가하며, 완화하기 위한 전략을 깊이 있게 배웁니다.",
        icon: "fa-triangle-exclamation",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">1.1 기술적 리스크 식별 (Risk Identification)</h3>
                <p style="margin-bottom: 1rem;">리스크 기반 테스팅(Risk-Based Testing, RBT)에서 TTA(Technical Test Analyst)의 핵심적인 역할은 제품의 내부 코드와 시스템 아키텍처에 내재된 <strong>'기술적 리스크'</strong>를 찾아내는 것입니다.</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.6;">
                    <li><strong>복잡한 제어 흐름:</strong> 순환 복잡도(Cyclomatic Complexity)가 높은 레거시 코드는 유지보수 중 결함이 발생할 확률이 압도적으로 높습니다.</li>
                    <li><strong>신기술 도입:</strong> 시장에서 충분히 검증되지 않은 신규 프레임워크나 라이브러리를 사용할 때 발생하는 통합(Integration) 및 호환성 리스크.</li>
                    <li><strong>비기능적 한계:</strong> 동시 접속자 수 증가에 따른 데이터베이스 데드락(Deadlock) 가능성, 메모리 누수, 그리고 보안 취약점(SQL 인젝션, XSS 등).</li>
                    <li><strong>개발 역량 부족:</strong> 개발팀이 해당 도메인에 대한 지식이 부족하거나 특정 언어의 숙련도가 낮을 경우 발생하는 구조적 설계 결함.</li>
                </ul>
                <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--warning); padding: 1rem; margin-top: 1rem;">
                    <strong>💡 [핵심 출제 포인트] 비즈니스 리스크 vs 기술적 리스크 구분하기</strong><br>
                    시험에서는 종종 TTA의 역할이 아닌 것을 고르는 문제가 나옵니다. "제품 출시 지연", "고객 이탈", "투자자 불만", "외주 계약 파기" 등은 모두 <strong>비즈니스 및 프로젝트 리스크</strong>이며, 이는 전적으로 Test Manager의 책임입니다. TTA는 반드시 <strong>'소스 코드, 아키텍처, 시스템 성능/보안'</strong>에 관련된 보기만 선택해야 합니다!
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">1.2 기술적 리스크 평가 (Risk Assessment)</h3>
                <p style="margin-bottom: 1rem;">리스크 수준(Risk Level)은 <strong>발생 가능성(Likelihood) × 영향도(Impact)</strong> 공식을 통해 산출됩니다.</p>
                <p style="margin-bottom: 1rem;">이 중 TTA는 <strong>결함의 발생 가능성(Likelihood)</strong>을 판단하는 데 주력합니다. 반면 결함이 발생했을 때 입을 금전적 손실이나 브랜드 가치 하락과 같은 <strong>영향도(Impact)</strong>는 주로 비즈니스 분석가(BA)나 제품 책임자(PO)가 평가합니다.</p>
                <p style="font-weight: 600; color: var(--success); margin-bottom: 0.5rem;">[발생 가능성 평가 지표]</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; line-height: 1.6;">
                    <li>코드 라인 수 (LOC) 및 모듈의 크기</li>
                    <li>정적 분석 도구로 측정된 순환 복잡도 수치 (보통 10 이상이면 위험으로 간주)</li>
                    <li>이전 릴리즈에서 해당 모듈이 가진 버그 이력 (결함 집중, Defect Clustering)</li>
                    <li>유닛 테스트(Unit Test) 커버리지의 부재</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">1.3 기술적 리스크 완화 (Risk Mitigation) 및 모니터링</h3>
                <p style="margin-bottom: 1rem;">산출된 리스크 매트릭스에 따라 테스트 전략(어떤 기법을 얼마나 깊이 적용할 것인가)을 차등 적용하여 리스크를 실질적으로 완화합니다.</p>
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(0,0,0,0.2);">
                    <tr style="border-bottom: 1px solid var(--glass-border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 0.75rem;">리스크 수준</th>
                        <th style="padding: 0.75rem;">권장 테스트 전략 (TTA 관점)</th>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 0.75rem; color: var(--danger); font-weight: bold;">High (높음)</td>
                        <td style="padding: 0.75rem;">가장 엄격한 화이트박스 기법인 <strong>MC/DC 100%</strong> 달성 의무화. 동적 메모리 누수 분석, 최고 수준의 부하/스트레스 테스트 및 화이트박스 침투 테스트(Pen-test) 수행.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 0.75rem; color: var(--warning); font-weight: bold;">Medium (중간)</td>
                        <td style="padding: 0.75rem;">결정 커버리지(Decision Coverage) 100% 달성 목표. 일반적인 사용량을 가정한 표준 부하 테스트 및 API 보안 스캐닝 수행.</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem; color: var(--success); font-weight: bold;">Low (낮음)</td>
                        <td style="padding: 0.75rem;">구문 커버리지(Statement Coverage) 달성, 기본 블랙박스 테스팅(해피 패스) 및 탐색적 테스팅 위주의 효율적 자원 배분.</td>
                    </tr>
                </table>
            </div>
        `
    },
    {
        id: "ch2",
        title: "2. 화이트박스 테스트 기법 (심화 구조 분석)",
        desc: "제어 흐름 그래프 기반 구조적 테스팅의 완벽한 이해와 MC/DC 집중 분석.",
        icon: "fa-code-branch",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">2.1 기본 커버리지: 구문, 결정, 조건</h3>
                <p style="margin-bottom: 1rem;">화이트박스(구조 기반) 테스팅은 모듈의 소스 코드 내부 논리 구조를 바탕으로 테스트 케이스를 도출하는 기법입니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>구문 커버리지 (Statement Coverage):</strong> 코드 내의 모든 실행 가능한 문장이 최소 1번 이상 실행되도록 보장합니다. 데드 코드(Dead code) 외의 구문을 점검하는 가장 기본적인 기법입니다.</li>
                    <li><strong>결정 커버리지 (Decision / Branch Coverage):</strong> 모든 제어문(IF, WHILE, SWITCH)의 평가 결과가 참(True)과 거짓(False)을 최소 한 번씩 도출하도록 보장합니다. <strong>(100% 결정 커버리지는 100% 구문 커버리지를 보장함)</strong></li>
                    <li><strong>조건 커버리지 (Condition Coverage):</strong> 결정문을 구성하는 '각각의 개별 조건'이 참과 거짓을 최소 한 번씩 가지도록 합니다.</li>
                </ul>
                <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem;">
                    <strong>[주의!] 조건 커버리지의 한계</strong><br>
                    <code>IF (A OR B)</code> 이라는 제어문이 있을 때,<br>
                    TC1: A=True, B=False -> 개별조건 A는 T, B는 F (전체결과: True)<br>
                    TC2: A=False, B=True -> 개별조건 A는 F, B는 T (전체결과: True)<br>
                    이 경우 개별 조건 A와 B는 모두 T와 F를 가졌으므로 <strong>조건 커버리지는 100%</strong>입니다. 하지만 전체 IF문의 결과는 두 번 모두 True만 나왔으므로, False 분기를 타지 못해 <strong>결정 커버리지는 50%</strong>에 불과합니다. 따라서 조건 커버리지는 결정 커버리지를 대체할 수 없습니다.
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--success);">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">2.2 변경 조건/결정 커버리지 (MC/DC) ★ (필수 출제)</h3>
                <p style="margin-bottom: 1rem;">DO-178C, ISO 26262 등 항공/자동차의 최고 안전 등급(ASIL-D) 소프트웨어에서 요구되는 가장 강력한 기준입니다.</p>
                <p style="margin-bottom: 1rem;"><strong>핵심 원리:</strong> 각 개별 조건이 <strong>'독립적으로(Independently)'</strong> 전체 결정 결과에 영향을 미친다는 것을 증명해야 합니다. 즉, 다른 조건들의 값은 고정해둔 상태에서, 평가하려는 조건 하나만 T->F로 바꿀 때 전체 결정의 결과도 T->F (또는 그 반대)로 바뀌는 쌍(Pair)을 찾아야 합니다.</p>
                <p style="margin-bottom: 0.5rem;"><strong>[MC/DC 필수 공식]</strong></p>
                <p style="font-size: 1.1rem; font-weight: bold; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 4px; display: inline-block; margin-bottom: 1rem;">조건이 N개일 때, MC/DC 달성을 위한 최소 테스트 케이스 수는 N + 1 개</p>
                
                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">MC/DC 예제: <code>IF (A AND B)</code></h4>
                <p style="margin-bottom: 0.5rem;">조건이 2개이므로 최소 TC는 3개(2+1)입니다.</p>
                <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; font-size: 0.9rem; text-align: center; margin-bottom: 1rem;">
                    <thead style="background: var(--bg-secondary);">
                        <tr><th style="padding: 0.5rem;">TC 번호</th><th style="padding: 0.5rem;">A</th><th style="padding: 0.5rem;">B</th><th style="padding: 0.5rem;">결과 (A AND B)</th></tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid var(--glass-border);"><td style="padding: 0.5rem;">TC 1</td><td style="padding: 0.5rem; color: var(--success);">True</td><td style="padding: 0.5rem; color: var(--success);">True</td><td style="padding: 0.5rem; color: var(--success);">True</td></tr>
                        <tr style="border-bottom: 1px solid var(--glass-border);"><td style="padding: 0.5rem;">TC 2</td><td style="padding: 0.5rem; color: var(--danger);">False</td><td style="padding: 0.5rem; color: var(--success);">True</td><td style="padding: 0.5rem; color: var(--danger);">False</td></tr>
                        <tr><td style="padding: 0.5rem;">TC 3</td><td style="padding: 0.5rem; color: var(--success);">True</td><td style="padding: 0.5rem; color: var(--danger);">False</td><td style="padding: 0.5rem; color: var(--danger);">False</td></tr>
                    </tbody>
                </table>
                <p><strong>설명:</strong> TC1과 TC2를 비교하면 B가 True로 고정된 상태에서 A가 T->F로 변할 때 전체 결과도 T->F로 변하므로 A의 독립성이 증명됩니다. TC1과 TC3을 비교하면 A가 고정된 상태에서 B의 독립성이 증명됩니다.</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">2.3 다중 조건(Multiple Condition) 및 경로 테스팅(Path Testing)</h3>
                <p style="margin-bottom: 1rem;"><strong>다중 조건 테스팅:</strong> 모든 개별 조건의 가능한 모든 논리적 조합(진리표의 모든 행)을 테스트합니다. 조건이 N개일 때 2^N 개의 테스트 케이스가 필요하여, 조건이 많아질 경우 <strong>'조합의 폭발(Combinatorial Explosion)'</strong> 문제가 발생해 실무 적용이 매우 어렵습니다.</p>
                <p style="margin-bottom: 1rem;"><strong>경로 테스팅:</strong> 제어 흐름 그래프(CFG) 상의 시작 노드부터 종료 노드까지 연결되는 가능한 모든 경로를 수행합니다. 루프(WHILE, FOR)가 존재할 경우 반복 횟수에 따라 경로가 무한대로 파생되므로, 루프 순회를 0번, 1번, 최대 허용 횟수 등으로 엄격히 제한하여 적용해야 합니다.</p>
            </div>
        `
    },
    {
        id: "ch3",
        title: "3. 분석 기법 (정적/동적 분석)",
        desc: "코드를 실행하지 않는 정적 분석과 런타임 환경을 모니터링하는 동적 분석.",
        icon: "fa-magnifying-glass-chart",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">3.1 정적 제어 흐름 분석 (Static Control Flow Analysis)</h3>
                <p style="margin-bottom: 1rem;">코드를 컴파일하거나 실행하지 않은 상태에서 소스 코드의 제어 흐름 그래프(CFG)를 그리고 구조적인 결함을 찾아내는 기법입니다. 컴파일러나 정적 분석 도구(SonarQube 등)를 주로 사용합니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>데드 코드 (Dead Code):</strong> 로직상 어떠한 입력값을 주어도 절대 도달할 수 없어 실행되지 않는 코드. (예: IF(항상 False) 구문 내부, 무조건 Return 된 이후의 라인)</li>
                    <li><strong>무한 루프 (Infinite Loop):</strong> 종료 조건이 누락되었거나 루프 내부에서 루프 탈출 조건으로 수렴하지 않아 영원히 빠져나올 수 없는 순환 구조.</li>
                    <li><strong>순환 복잡도 (McCabe's Cyclomatic Complexity):</strong> 프로그램의 독립적인 실행 경로 개수 측정. 복잡도가 높을수록(통상 10 초과) 가독성이 떨어지고 테스트 케이스 도출이 기하급수적으로 어려워집니다.</li>
                </ul>
                <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem;">
                    <strong>[순환 복잡도 계산 공식] V(G) = E - N + 2</strong><br>
                    (E: Edges 간선의 수, N: Nodes 노드의 수)<br>
                    시험에서 흐름도 그림이 주어지면, 화살표(간선)의 개수와 동그라미(노드)의 개수를 세어 위 공식에 대입하면 정답이 나옵니다.
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">3.2 정적 데이터 흐름 분석 (Static Data Flow Analysis)</h3>
                <p style="margin-bottom: 1rem;">변수의 상태 전이를 추적하여 메모리 낭비나 시스템 충돌의 원인을 찾는 정적 분석입니다. 변수의 라이프사이클은 <strong>D(Define:정의), U(Use:사용), K(Kill:해제/소멸)</strong> 로 나뉩니다.</p>
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(0,0,0,0.2);">
                    <tr style="border-bottom: 1px solid var(--glass-border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 0.75rem;">이상 징후 패턴</th>
                        <th style="padding: 0.75rem;">상세 설명 및 위험성</th>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 0.75rem; color: var(--danger); font-weight: bold;">UR (Use before Define)</td>
                        <td style="padding: 0.75rem;">변수에 어떠한 값을 <strong>정의(초기화)하기도 전에 사용(읽기)</strong>하려는 매우 심각한 오류. 쓰레기값(Garbage) 참조나 시스템 충돌(Null Pointer Exception)을 유발합니다.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 0.75rem; color: var(--warning); font-weight: bold;">DD (Define - Define)</td>
                        <td style="padding: 0.75rem;">값을 할당(D)한 뒤, 한 번도 읽지(U) 않고 곧바로 또 다른 값을 덮어씌워 할당(D)하는 현상. 비효율적이며 로직의 누락을 강하게 의심해야 합니다.</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.75rem; color: var(--text-secondary); font-weight: bold;">DU (Define - Undefine)</td>
                        <td style="padding: 0.75rem;">변수를 선언하고 값까지 할당해 두었으나, 단 한 번도 사용하지 않은 채 스코프가 종료되어 변수가 해제(K/U)되는 현상. 리소스 낭비입니다.</td>
                    </tr>
                </table>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">3.3 동적 분석 (Dynamic Analysis)</h3>
                <p style="margin-bottom: 1rem;">소프트웨어를 컴파일하여 <strong>'실제로 실행(Runtime)'</strong>시키면서, 보이지 않는 백그라운드(메모리 자원, 스레드 동기화 상태)를 모니터링하는 분석 기법입니다. 주로 C/C++ 같은 메모리 수동 관리 언어에서 필수적입니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>메모리 누수 (Memory Leak):</strong> malloc/new로 할당받은 메모리를 사용 후 반환(free/delete)하지 않아, 시간이 지날수록 OS의 가용 메모리가 서서히 줄어들다가 결국 OOM(Out of Memory)으로 시스템이 죽어버리는 현상. 동적 분석의 '내구성 테스트(Soak Test)'와 밀접하게 연관됩니다.</li>
                    <li><strong>댕글링 포인터 (Dangling Pointer):</strong> 이미 메모리 영역이 해제(Free)되어 반환되었음에도 불구하고, 포인터 변수가 여전히 해당 주소를 가리킨 채 값을 읽거나 쓰려고 시도하는 현상. (심각한 보안 취약점 및 크래시 유발)</li>
                    <li><strong>데드락 (Deadlock) 및 데이터 레이스:</strong> 멀티 스레드 프로그래밍에서 두 스레드가 서로가 쥐고 있는 자원의 Lock을 무한정 대기하는 교착 상태(데드락)나, 동시에 자원에 접근하여 값이 꼬이는 경합(Race Condition).</li>
                </ul>
            </div>
        `
    },
    {
        id: "ch4",
        title: "4. 기술적 품질 특성",
        desc: "성능, 보안, 신뢰성, 유지보수성, 이식성에 대한 테스트 접근법.",
        icon: "fa-shield-halved",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">4.1 보안성 (Security)</h3>
                <p style="margin-bottom: 1rem;">데이터와 시스템을 보호하고 무결성과 기밀성을 유지하는 능력입니다. TTA는 정적 코드 분석과 모의 해킹(Penetration Test)을 통해 취약점을 식별합니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>SQL 인젝션 (SQL Injection):</strong> 사용자 입력 필드에 악의적인 SQL 명령을 삽입하여 데이터베이스를 파괴하거나 민감한 정보를 탈취하는 가장 고전적이면서도 치명적인 공격. (대응책: 매개변수화된 쿼리/Prepared Statement 사용)</li>
                    <li><strong>XSS (Cross-Site Scripting):</strong> 웹사이트 게시판 등에 악성 자바스크립트를 작성하여, 이를 열람하는 다른 사용자의 브라우저에서 스크립트가 강제 실행되도록 하여 쿠키(세션)를 탈취하는 공격.</li>
                    <li><strong>모의 해킹 (Pen-test):</strong> 시스템 구성 정보와 소스 코드를 모두 열람하고 공격하는 화이트박스 방식과, 외부 해커와 동일한 관점에서 공격하는 블랙박스 방식이 있습니다.</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">4.2 성능 효율성 (Performance Efficiency)</h3>
                <p style="margin-bottom: 1rem;">성능 테스트는 단순히 '속도'만을 재는 것이 아닙니다. 주어진 자원 내에서 처리량(Throughput)과 응답 시간(Response Time)의 한계를 찾는 활동입니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>부하 테스트 (Load Testing):</strong> 아키텍처 명세서에 정의된 '정상적인 최대(Peak) 동시 접속자 수'를 인가했을 때, 시스템이 성능 목표(예: 3초 이내 응답)를 지속적으로 유지하는지 검증합니다.</li>
                    <li><strong>스트레스 테스트 (Stress Testing):</strong> 설계 한계를 훌쩍 넘는 초과 부하를 지속적으로 주어 시스템 자원(CPU 100%, 커넥션 고갈)을 바닥냅니다. 시스템이 <strong>언제 파괴되는지(Breaking Point)</strong>, 파괴될 때 주변 시스템에 연쇄 장애를 일으키지 않고 우아하게 실패하는지(Graceful Degradation) 관찰합니다.</li>
                    <li><strong>내구성 테스트 (Soak/Endurance Testing):</strong> 일반적인 수준의 부하를 며칠, 몇 주에 걸쳐 '장기간' 지속합니다. 가동 직후에는 알 수 없는 장기 메모리 누수나 데이터베이스 찌꺼기 축적 문제를 찾아내는 데 매우 탁월합니다.</li>
                    <li><strong>스파이크 테스트 (Spike Testing):</strong> 홈쇼핑 마감 임박 순간이나 수강신청 오픈 시간처럼 '수 초 이내에 폭발적인 트래픽'이 밀려들 때 시스템(특히 클라우드의 오토 스케일링)이 버티거나 올바르게 차단/대기열을 형성하는지 평가합니다.</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">4.3 신뢰성, 유지보수성 및 이식성</h3>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>신뢰성 (Reliability):</strong> 시스템 장애에 직면했을 때의 대처 능력을 뜻합니다. 하드디스크가 고장나도 RAID 구성을 통해 무정지 서비스를 유지하는 <strong>결함 허용성(Fault Tolerance)</strong>, 그리고 시스템 전체가 죽었을 때 백업을 통해 정해진 시간 내에 서비스를 살려내는 <strong>복구성(Recoverability)</strong>이 포함됩니다.</li>
                    <li><strong>유지보수성 (Maintainability):</strong> 시스템 로직을 얼마나 쉽게 분석하고 변경할 수 있는지 평가합니다. 좋은 유지보수성은 <strong>높은 응집도(Cohesion)와 낮은 결합도(Coupling)</strong>에서 비롯됩니다. 이를 검증하기 위해 자동화된 회귀 테스트(Regression Test) 구축 여부가 중요합니다.</li>
                    <li><strong>이식성 (Portability):</strong> A 환경(예: 윈도우, 온프레미스 서버)에서 동작하던 소프트웨어를 B 환경(예: 리눅스, AWS 클라우드)으로 얼마나 쉽고 완벽하게 옮겨 설치(Installability)하고 적응(Adaptability)시킬 수 있는지에 대한 지표입니다.</li>
                </ul>
            </div>
        `
    },
    {
        id: "ch5",
        title: "5. 테스트 도구 및 자동화",
        desc: "TTA가 활용하는 전문화된 자동화 도구들의 구조와 도입 전략.",
        icon: "fa-wrench",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">5.1 모델 기반 테스팅 도구 (MBT, Model-Based Testing)</h3>
                <p style="margin-bottom: 1rem;">시스템의 요구사항과 비즈니스 로직을 인간이 읽는 산문 텍스트가 아니라, '상태 전이 다이어그램'이나 'UML 활동 다이어그램' 등 도구가 해석할 수 있는 수학적, 추상적 <strong>'모델(Model)'</strong>로 정의합니다.</p>
                <p style="margin-bottom: 1rem;">도구는 이 모델을 읽어 들여 수많은 경로 탐색 알고리즘을 수행한 뒤, 인간이 미처 생각하지 못한 엣지 케이스까지 포함하여 <strong>자동으로 엄청난 양의 테스트 케이스와 자동화 스크립트를 생성(Generation)</strong>합니다.</p>
                <p style="margin-bottom: 1rem;"><strong>가장 큰 장점:</strong> 비즈니스 요구사항이나 시스템 사양이 변경되었을 때, 수백 개의 테스트 스크립트를 수작업으로 수정할 필요 없이 <strong>단지 '모델만 수정(Update Model)'하면 도구가 새로운 테스트 세트를 즉각 다시 만들어내므로 유지보수 비용이 극적으로 절감</strong>됩니다.</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">5.2 결함 주입 도구 (Fault Seeding / Fault Injection)</h3>
                <p style="margin-bottom: 1rem;">성능이 떨어지거나 시스템이 불안정할 때를 기다리는 것이 아니라, 멀쩡하게 정상 동작 중인 소프트웨어나 인프라 환경에 <strong>인위적으로 고의적인 결함을 주입(Inject)</strong>하는 카오스 엔지니어링(Chaos Engineering) 성격의 도구입니다.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.6; margin-bottom: 1rem;">
                    <li><strong>소프트웨어 레벨:</strong> 런타임에 메모리 변수 값을 강제로 덮어쓰거나, 무한 루프 코드를 심어 의도적인 오류 예외 처리 로직이 동작하는지 확인합니다.</li>
                    <li><strong>하드웨어/인프라 레벨:</strong> 네트워크 케이블 연결을 강제로 끊거나, 스토리지 용량을 가득 채우거나, 동작 중인 클라우드 가상 머신(VM) 전원을 무작위로 내려버립니다.</li>
                </ul>
                <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem;">
                    <strong>💡 [핵심 출제 포인트]</strong> 결함 주입 도구를 사용하는 근본적인 목적은 앞서 배운 품질 특성 중 시스템의 <strong>결함 허용성(Fault Tolerance)과 복구성(Recoverability)</strong>이 실제 재난 상황에서 아키텍처 설계대로 동작하는지 생생하게 검증하기 위함입니다.
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem;">5.3 정적 분석 및 성능 측정 자동화 도구</h3>
                <p style="margin-bottom: 1rem;"><strong>정적 분석 도구 연동:</strong> 개발자가 작성한 소스 코드가 CI(Continuous Integration) 파이프라인에 커밋/병합(Merge)되기 직전에, SonarQube와 같은 도구가 순환 복잡도 및 코딩 컨벤션을 스캔하여 임계치를 초과하면 빌드를 강제로 실패(Fail)시킵니다. <strong>오탐(False Positive) 관리</strong>가 TTA의 가장 중요한 유지보수 임무입니다.</p>
                <p style="margin-bottom: 1rem;"><strong>성능 도구의 아키텍처:</strong> 성능 테스트 도구(LoadRunner, JMeter 등)는 한 대의 PC에서 수천 명의 브라우저 렌더링을 감당할 수 없으므로, 프로토콜 계층(HTTP 패킷 등)에서만 동작하는 매우 가벼운 <strong>가상 사용자(Virtual User, VUser) 스레드</strong>를 대량으로 생성하여 서버를 타격합니다. 도구를 실행하는 컨트롤러 PC의 CPU나 네트워크가 병목에 걸리면 부하를 제대로 줄 수 없으므로 부하 발생기(Load Generator)를 여러 대로 늘려(분산 부하) 구성해야 합니다.</p>
            </div>
        `
    }
];

// 45 Unique High-Quality TTA Questions
const quizQuestions = [
    // --- Chapter 1: Risk-Based Testing (Q1-Q3) ---
    { id: 1, chapter: "ch1", question: "[TTA 역할] 신규 결제 시스템 프로젝트에서 다음 중 TTA가 평가해야 할 가장 적합한 '기술적 리스크' 요인은 무엇인가?", options: ["경쟁사가 유사한 결제 시스템을 먼저 출시할 가능성", "마케팅 캠페인 실패로 인한 초기 사용자 유치 실패", "시스템 내 복잡한 트랜잭션 롤백 로직 구현 시 발생할 수 있는 데이터 불일치 가능성", "외주 개발사와의 계약 파기로 인한 일정 지연"], correctAnswer: 2, rationale: "경쟁사, 마케팅, 계약 문제는 모두 비즈니스 및 프로젝트 리스크(Test Manager의 영역)입니다. 트랜잭션 롤백 로직의 복잡성으로 인한 데이터 무결성 훼손은 TTA가 관리해야 할 명백한 기술적 리스크입니다." },
    { id: 2, chapter: "ch1", question: "리스크 평가(Risk Assessment) 과정에서 리스크 수준을 도출하기 위해 결함의 '발생 가능성(Likelihood)'과 '영향도(Impact)'를 곱합니다. TTA가 주로 관여하여 판단하는 요소와 그 이유로 올바른 것은?", options: ["영향도. 비즈니스 손실 금액은 TTA가 아키텍처를 분석하여 도출할 수 있기 때문.", "발생 가능성. 시스템의 소스코드 복잡도와 개발팀의 기술적 역량을 분석하여 코드에 결함이 내재될 가능성을 산정할 수 있기 때문.", "둘 다 관여하지 않음. 리스크 평가는 전적으로 비즈니스 분석가(BA)의 고유 권한임.", "영향도. 결함으로 인한 사용자 이탈률을 TTA가 예측해야 함."], correctAnswer: 1, rationale: "TTA는 코드의 복잡도, 신기술 적용 여부 등을 분석하여 기술적 결함이 나타날 '발생 가능성(Likelihood)'을 도출하는 데 전문성이 있습니다. 영향도는 주로 비즈니스 측면에서 평가됩니다." },
    { id: 3, chapter: "ch1", question: "리스크가 가장 높은(High Risk) 안전 필수 컴포넌트에 대해 TTA가 수립해야 할 가장 적절한 리스크 완화(Mitigation) 전략은?", options: ["구문 커버리지(Statement Coverage) 100%를 달성하여 기본 흐름을 검증한다.", "다이내믹 분석과 정적 분석을 생략하고 블랙박스 테스팅에 모든 자원을 집중한다.", "MC/DC (변경 조건/결정 커버리지) 100%를 의무화하고 동적 메모리 분석을 통한 강건성 테스트를 추가한다.", "테스트 케이스 작성을 생략하고 개발자에게 탐색적 테스팅을 지시한다."], correctAnswer: 2, rationale: "리스크가 높은 생명/재산과 직결된 컴포넌트는 가장 엄격한 화이트박스 기법인 MC/DC 적용과 동적 메모리 분석(누수, 크래시 점검)을 필수적으로 수반해야 완화할 수 있습니다." },

    // --- Chapter 2: White-Box Testing (Q4-Q16) ---
    { id: 4, chapter: "ch2", question: "코드: \nIF (Age >= 18 AND HasLicense == True) THEN\n  Print(\"Can Drive\")\nEND IF\n위 코드에서 100% 구문 커버리지(Statement Coverage)를 달성하기 위해 필요한 최소 테스트 케이스 수는?", options: ["1개", "2개", "3개", "4개"], correctAnswer: 0, rationale: "구문 커버리지는 모든 '문장'이 한 번 이상 실행되면 됩니다. 즉 Print(\"Can Drive\") 구문이 실행되도록 Age=20, HasLicense=True 인 케이스 단 1개만 있으면 100% 달성됩니다." },
    { id: 5, chapter: "ch2", question: "위의 동일한 IF문에 대하여 100% 결정 커버리지(Decision Coverage)를 달성하기 위해 필요한 최소 테스트 케이스 수는?", options: ["1개", "2개", "3개", "4개"], correctAnswer: 1, rationale: "결정 커버리지는 IF문 자체의 결과가 True가 되는 경우 1번, False가 되어 분기를 건너뛰는 경우 1번이 필요하므로 총 2개가 필요합니다." },
    { id: 6, chapter: "ch2", question: "다음 중 '조건 커버리지(Condition Coverage)'에 대한 설명으로 올바른 것은?", options: ["조건 커버리지 100%를 달성하면 결정 커버리지 100%도 무조건 보장된다.", "개별 조건들의 모든 가능한 논리적 조합(진리표 전체)을 테스트해야 한다.", "결정문 내의 모든 개별 조건(Atomic condition)이 참과 거짓을 최소 한 번씩 가지도록 테스트한다.", "단일 변수에 대한 동등 분할을 수행하는 기법이다."], correctAnswer: 2, rationale: "조건 커버리지는 결정문을 구성하는 '각 개별 조건'이 True/False를 한 번씩 평가받는 것을 의미합니다. 하지만 전체 결정 결과의 True/False를 보장하지는 않아 결정 커버리지를 포함하지 못합니다." },
    { id: 7, chapter: "ch2", question: "결정문 `IF (X OR Y)`에 대해 MC/DC를 달성하려고 합니다. 필요한 최소 테스트 케이스의 쌍(Pair) 구성으로 적절한 것은?", options: ["(T,T), (F,F)", "(T,F), (F,T), (F,F)", "(T,T), (T,F), (F,T), (F,F)", "(T,T), (F,T)"], correctAnswer: 1, rationale: "조건이 2개이므로 MC/DC 최소 TC는 3개입니다. (T,F)=T, (F,T)=T, (F,F)=F 를 선택하면 X가 T->F일때 결과 T->F(Y는 F로 고정), Y가 T->F일때 결과 T->F(X는 F로 고정)되어 양쪽 모두의 독립적 영향을 증명할 수 있습니다." },
    { id: 8, chapter: "ch2", question: "결정문 `IF (A AND B AND C)`에 대해 MC/DC 100% 달성을 위해 필요한 최소 테스트 케이스 수는 몇 개인가?", options: ["3개", "4개", "7개", "8개"], correctAnswer: 1, rationale: "공식에 따라 조건이 N개일 때 MC/DC 최소 테스트 케이스 수는 N+1개입니다. A, B, C 총 3개의 조건이 있으므로 4개가 필요합니다." },
    { id: 9, chapter: "ch2", question: "코드: \nWHILE (Count < 5)\n  Count = Count + 1\nEND WHILE\n결정 커버리지를 100% 달성하기 위한 올바른 흐름은?", options: ["루프를 아예 진입하지 않는다.", "루프에 한 번 진입하고 종료한다.", "루프 진입 조건(True) 1회와 루프 종료 조건(False) 1회를 모두 만족해야 한다.", "루프를 5번 모두 돌아야 한다."], correctAnswer: 2, rationale: "WHILE 루프도 제어(결정)문입니다. 루프의 조건식이 True가 되어 내부 블록을 실행하는 경우와, False가 되어 루프를 빠져나가는 두 가지 분기가 모두 테스트되어야 결정 커버리지가 달성됩니다." },
    { id: 10, chapter: "ch2", question: "다중 조건 테스팅(Multiple Condition Testing)의 가장 큰 단점은 무엇인가?", options: ["구문 커버리지를 달성하지 못할 수 있다.", "개발 초기 단계에서만 사용할 수 있다.", "조건의 수가 늘어날수록 테스트 케이스 수가 기하급수적으로 증가(2^N)하여 폭발(Explosion) 문제가 발생한다.", "동적 메모리 누수를 감지할 수 없다."], correctAnswer: 2, rationale: "다중 조건 테스팅은 모든 가능한 진리표 조합을 요구하므로 조건이 10개만 되어도 1024개의 케이스가 필요해 실무에 적용하기 불가능에 가깝습니다. 그 대안이 선형적으로 증가하는 MC/DC입니다." },
    { id: 11, chapter: "ch2", question: "API 테스팅에서 TTA가 수행하는 구조 기반(화이트박스) 테스트 활동으로 가장 알맞은 것은?", options: ["API가 처리하는 데이터베이스 레코드의 무결성을 블랙박스 관점에서 검증", "API 소스코드의 제어 흐름 그래프(CFG)를 분석하고, 파라미터 분기점의 결정 커버리지를 달성하는 테스트 작성", "포스트맨(Postman)으로 헤더 값을 조작하여 응답 코드 확인", "외부 고객의 사용 시나리오를 바탕으로 성능 부하 유발"], correctAnswer: 1, rationale: "화이트박스 테스팅은 모듈(API)의 '내부 구조(소스코드, 제어 흐름)'를 기반으로 커버리지를 달성하는 활동입니다. 소스코드 분석과 결정 커버리지 달성이 이에 해당합니다." },
    { id: 12, chapter: "ch2", question: "제어 흐름 그래프에서 노드 간의 가능한 모든 '독립적인' 실행 경로를 계산하는 지표는 무엇이며, 어떤 공식(강하게 연결된 경우)을 사용하는가?", options: ["결합도, V(G) = N - E + 1", "경로 커버리지, V(G) = E / N", "순환 복잡도 (McCabe), V(G) = E - N + 2", "할당 복잡도, V(G) = E * N"], correctAnswer: 2, rationale: "McCabe의 순환 복잡도(Cyclomatic Complexity)는 프로그램의 구조적 복잡성을 수학적으로 측정하며 공식은 간선(E) - 노드(N) + 2 입니다." },
    { id: 13, chapter: "ch2", question: "어떤 모듈의 CFG(제어 흐름 그래프)를 그렸을 때, 간선(E)이 15개, 노드(N)가 12개였습니다. 이 모듈의 순환 복잡도 값은?", options: ["1", "3", "5", "7"], correctAnswer: 2, rationale: "V(G) = E - N + 2 = 15 - 12 + 2 = 5 입니다. 이는 해당 모듈 내에 독립적인 분기 경로가 5개 존재함을 의미합니다." },
    { id: 14, chapter: "ch2", question: "DO-178C (항공 소프트웨어 표준) Level A와 같은 가장 높은 안전 수준의 시스템에서 소스 코드 레벨의 테스트를 수행할 때 반드시 달성하도록 요구되는 커버리지는?", options: ["Statement Coverage 100%", "Condition Coverage 100%", "MC/DC 100%", "Equivalence Partitioning 100%"], correctAnswer: 2, rationale: "항공기, 자동차(ISO 26262 ASIL-D) 등 사람의 생명과 직결되는 최고 등급의 안전 시스템에서는 모든 개별 조건의 독립적 영향을 수학적으로 검증하는 MC/DC 100%를 의무화하고 있습니다." },
    { id: 15, chapter: "ch2", question: "다음 제어 흐름 중 순환 복잡도를 증가시키는 요소가 아닌 것은?", options: ["`IF ... ELSE ...` 구문", "`WHILE (조건)` 루프문", "`SWITCH ... CASE`의 각 케이스문", "연속된 변수 할당문 (예: `x = 1; y = 2;`)"], correctAnswer: 3, rationale: "변수에 값을 단순히 순차적으로 할당하는 구문은 조건에 따른 흐름의 '분기(Branch)'를 만들지 않으므로 제어 흐름 그래프에서 노드만 늘어날 뿐 복잡도를 증가시키지 않습니다." },
    { id: 16, chapter: "ch2", question: "경로 테스팅(Path Testing) 기법의 실무 적용 시 한계점은 무엇인가?", options: ["구문 커버리지를 전혀 보장할 수 없다.", "코드에 루프(WHILE, FOR)가 포함된 경우 가능한 경로의 수가 무한대(또는 천문학적 숫자)로 증가하여 100% 달성이 불가능에 가깝다.", "정적 분석 도구 없이는 사용할 수 없는 기법이다.", "개별 조건의 독립적 영향을 파악하는 데 특화되어 있어 전체 로직을 볼 수 없다."], correctAnswer: 1, rationale: "경로 테스팅은 시작부터 끝까지의 고유한 모든 루트를 커버하는 것인데, 루프(반복문)가 있으면 반복 횟수만큼 경로가 기하급수적으로 늘어나 폭발하므로 실무적으로 루프 제한 규칙을 둬야만 수행할 수 있습니다." },

    // --- Chapter 3: Analytical Techniques (Q17-Q26) ---
    { id: 17, chapter: "ch3", question: "코드 내에 어떤 입력값을 주더라도 절대로 도달할 수 없어 실행되지 않는 코드(Dead Code)를 찾아내고자 합니다. 가장 적합한 분석 기법은?", options: ["동적 성능 분석 (Dynamic Performance Analysis)", "정적 제어 흐름 분석 (Static Control Flow Analysis)", "화이트박스 침투 테스트", "동등 분할"], correctAnswer: 1, rationale: "도달할 수 없는 코드는 소프트웨어를 실행하지 않고 소스코드의 제어 흐름 그래프(CFG)를 그리는 것만으로 즉시 파악할 수 있는 전형적인 정적 제어 흐름 분석 대상입니다." },
    { id: 18, chapter: "ch3", question: "데이터 흐름 분석에서 'UR (Use before Define)' 이상 징후는 어떤 상황을 의미하며 왜 위험한가?", options: ["변수에 값을 할당하기 전에 읽으려 하는 상황이며, 초기화되지 않은 쓰레기 값을 읽거나 런타임 오류(NullPointerException 등)를 일으키므로 매우 치명적이다.", "변수에 값을 두 번 연속으로 할당하는 상황이며, 단순히 메모리를 낭비한다.", "변수를 할당한 후 사용하지 않고 스코프가 종료되는 상황으로 치명적이지 않다.", "포인터가 해제된 메모리를 참조하는 상황이다."], correctAnswer: 0, rationale: "UR은 정의되지 않은 상태(Undefine)에서 사용(Use)하는 것입니다. 초기화되지 않은 메모리를 참조하면 치명적인 시스템 충돌이나 예기치 않은 논리 오류를 유발합니다." },
    { id: 19, chapter: "ch3", question: "코드 스니펫:\n1: int x = 10;\n2: x = 20;\n3: print(x);\n위 코드에서 변수 x에 대해 데이터 흐름 분석을 수행할 때 나타나는 이상 징후는?", options: ["UR (Use before Define)", "DD (Define - Define)", "DU (Define - Undefine)", "정상적인 데이터 흐름"], correctAnswer: 1, rationale: "1번 라인에서 x를 10으로 정의(D)하고, 한 번도 읽지(U) 않은 채 2번 라인에서 다시 20으로 정의(D)했습니다. 전형적인 DD (정의 후 재정의) 이상 징후로, 로직 누락이 의심됩니다." },
    { id: 20, chapter: "ch3", question: "동적 분석(Dynamic Analysis) 도구가 식별할 수 있는 결함 유형이 아닌 것은?", options: ["메모리 누수 (Memory Leak)", "멀티 스레드 환경에서의 교착 상태 (Deadlock)", "댕글링 포인터 (Dangling Pointer) 참조", "문법에 맞지 않는 네이밍 컨벤션 위반"], correctAnswer: 3, rationale: "네이밍 규칙 위반, 들여쓰기 오류 등 코딩 표준(MISRA 등) 위반은 코드를 실행할 필요 없이 소스코드를 스캔하는 '정적 분석'을 통해 식별합니다. 동적 분석은 런타임 메모리와 스레드를 모니터링합니다." },
    { id: 21, chapter: "ch3", question: "서버가 구동된 지 일주일째 접어들며 가용 메모리(RAM)가 0에 수렴하더니 OOM(Out of Memory)으로 시스템이 다운되었습니다. 원인을 찾기 위해 TTA가 수행해야 할 활동은?", options: ["정적 제어 흐름 분석 도구를 돌려 무한 루프를 찾는다.", "동적 분석 도구(Valgrind 등)를 연동하고 장기간 부하를 인가하여 할당(malloc)된 후 해제(free)되지 않는 메모리 누수를 추적한다.", "데이터 흐름 분석을 통해 DU 징후를 찾는다.", "순환 복잡도를 계산하여 10 이하로 낮추는 리팩토링을 수행한다."], correctAnswer: 1, rationale: "시간이 지남에 따라 점진적으로 메모리가 고갈되는 현상은 메모리 누수(Memory Leak)의 대표적 증상이며, 런타임에 메모리 할당/해제 라이프사이클을 추적하는 동적 분석이 필수적입니다." },
    { id: 22, chapter: "ch3", question: "C++ 프로그램에서 메모리 블록을 해제(`delete ptr;`)했음에도 불구하고, 이후 코드에서 다시 해당 포인터(`*ptr = 10;`)를 사용하려다 크래시가 발생했습니다. 이 결함을 무엇이라 하는가?", options: ["데드 코드", "데이터 레이스", "댕글링 포인터 (Dangling Pointer)", "오버플로우"], correctAnswer: 2, rationale: "해제(Free/Delete)된 메모리의 주소를 계속 가리키고 있으면서 참조하려는 포인터를 댕글링 포인터라고 부르며, 심각한 보안 및 안정성 문제를 초래합니다." },
    { id: 23, chapter: "ch3", question: "CI/CD 파이프라인에 정적 분석 도구(예: SonarQube)를 연동할 때 TTA가 흔히 마주하는 문제와 그 해결책으로 알맞은 것은?", options: ["도구가 코드를 자동으로 수정해버려 빌드가 깨짐 -> 자동 수정 옵션을 끈다.", "오탐(False Positive, 실제 결함이 아닌데 경고 발생)이 너무 많아 개발자가 피로를 느낌 -> 룰셋(Rule Set)을 팀의 컨벤션에 맞게 튜닝하고 예외 처리를 세밀화한다.", "동작 중인 서버의 메모리를 너무 많이 차지함 -> 서버 스펙을 업그레이드한다.", "네트워크 지연이 심해짐 -> 로컬 환경에서만 돌린다."], correctAnswer: 1, rationale: "정적 분석 도구의 가장 큰 이슈는 너무 많은 오탐(False Positive)으로 인해 경고가 무시되는 현상입니다. TTA는 프로젝트 환경에 맞게 규칙의 우선순위를 조정하고 불필요한 규칙을 비활성화(Tuning)해야 합니다." },
    { id: 24, chapter: "ch3", question: "다음 중 컴파일러 자체가 기본적으로 수행해 줄 수 있는 정적 분석의 영역은?", options: ["메모리 누수 감지", "SQL 인젝션 탐지", "초기화되지 않은 변수 사용에 대한 경고 (UR 징후)", "동시성 데드락 탐지"], correctAnswer: 2, rationale: "현대의 컴파일러(GCC, Clang 등)는 빌드 과정에서 구문 분석(Syntax Check) 및 기본적인 데이터 흐름 분석을 수행하여 초기화 전 변수 사용과 같은 명백한 UR 오류에 대해 경고(Warning/Error)를 발생시킵니다." },
    { id: 25, chapter: "ch3", question: "제어 흐름 분석에서 찾아낼 수 있는 또 다른 결함 유형으로 코드가 의도치 않게 끝없이 반복 실행되는 현상은?", options: ["버퍼 오버플로우", "데드락", "무한 루프 (Infinite Loop)", "타임아웃"], correctAnswer: 2, rationale: "제어 흐름 그래프(CFG)를 그리면 종료 조건이 없거나 종료 조건으로 도달하는 경로가 없는 루프 구조를 시각적으로 찾아낼 수 있으며 이를 무한 루프라 합니다." },
    { id: 26, chapter: "ch3", question: "멀티 스레드 프로그래밍 환경에서 두 개 이상의 스레드가 공유 자원의 락(Lock)을 서로 해제하기를 영원히 기다리는 현상을 무엇이라 하는가?", options: ["메모리 누수", "교착 상태 (Deadlock)", "스래싱 (Thrashing)", "경합 조건 (Race Condition)"], correctAnswer: 1, rationale: "동적 분석의 주요 탐지 대상 중 하나인 데드락(Deadlock)은 스레드들이 서로가 가진 자원을 요구하며 무한 대기하는 상태를 말합니다." },

    // --- Chapter 4: Quality Characteristics (Q27-Q39) ---
    { id: 27, chapter: "ch4", question: "이커머스 웹사이트 오픈 날짜에 예상되는 최대 접속자(예: 동시 접속자 1만 명)가 몰렸을 때, 시스템이 3초 이내의 응답 시간 요구사항을 만족하는지 검증하기 위한 테스트는?", options: ["스파이크 테스트", "스트레스 테스트", "부하 테스트 (Load Testing)", "내구성 테스트"], correctAnswer: 2, rationale: "예상되는 '정상적인 최대(Peak) 부하' 상황에서 기능과 성능 요구사항이 안정적으로 유지되는지 평가하는 것을 부하 테스트(Load Testing)라고 합니다." },
    { id: 28, chapter: "ch4", question: "부하를 설계 한계 이상으로 지속적으로 증가시켜 서버 리소스(CPU 100%, DB 커넥션 고갈)를 고갈시켰습니다. 이때 시스템이 조용히 멈추는지(Graceful Degradation), 아니면 데이터가 유실되며 크래시되는지 관찰하는 테스트는?", options: ["스트레스 테스트 (Stress Testing)", "보안성 테스트", "이식성 테스트", "가용성 테스트"], correctAnswer: 0, rationale: "스트레스 테스트의 핵심 목적은 한계를 넘는 극한의 과부하를 주어 시스템이 '언제 실패하는가(Breaking point)'와 '실패 시 어떻게 대처하는가(오류 메시지, 복구 여부)'를 확인하는 것입니다." },
    { id: 29, chapter: "ch4", question: "입력 데이터에 `1=1; DROP TABLE users;` 와 같은 조작된 문자열을 전송하여 데이터베이스를 탈취하거나 파괴하려는 공격을 방어하는지 확인하는 보안 테스트 기법은?", options: ["크로스 사이트 스크립팅 (XSS)", "SQL 인젝션 (SQL Injection) 테스트", "디도스 (DDoS) 테스트", "Man-in-the-Middle 테스트"], correctAnswer: 1, rationale: "사용자 입력 필드를 통해 악의적인 데이터베이스 쿼리 조각을 삽입하여 백엔드 DB의 제어권을 탈취하는 공격을 SQL Injection이라고 합니다." },
    { id: 30, chapter: "ch4", question: "소프트웨어 품질 특성 중 '이식성(Portability)'의 하위 특성에 속하는 것은?", options: ["모듈성과 분석성", "적응성(Adaptability)과 대체성(Replaceability)", "성숙성과 결함 허용성", "기밀성과 무결성"], correctAnswer: 1, rationale: "이식성(Portability)은 시스템을 한 환경에서 다른 환경(OS, 하드웨어)으로 이동할 때의 편이성을 말하며, 설치성, 적응성, 대체성 등의 하위 특성을 가집니다." },
    { id: 31, chapter: "ch4", question: "결함 허용성(Fault Tolerance)을 가장 잘 설명한 사례는 무엇인가?", options: ["시스템에 백신이 설치되어 해커의 공격을 방어함.", "하드디스크 하나가 고장 났으나, RAID-5 구성으로 인해 데이터 손실 없이 웹 서비스가 계속 정상 동작함.", "코드가 매우 깔끔하여 버그 수정에 5분밖에 걸리지 않음.", "사용자 트래픽이 평소 10배로 뛰어도 시스템이 느려지지 않음."], correctAnswer: 1, rationale: "결함 허용성은 구성 요소 일부(디스크, 특정 서버 인스턴스)에 실제 물리적/소프트웨어적 고장이 발생했음에도 불구하고 시스템이 전체 기능을 상실하지 않고 정상 작동을 이어가는 능력을 의미합니다." },
    { id: 32, chapter: "ch4", question: "유지보수성(Maintainability)을 저해하는 요인이 아닌 것은?", options: ["함수의 길이가 1000줄 이상이며 순환 복잡도가 30 이상이다.", "객체지향 설계에서 클래스 간 결합도(Coupling)가 매우 높다.", "코드에 전역 변수(Global Variable)가 남용되어 상태 추적이 어렵다.", "각 컴포넌트가 높은 응집도(Cohesion)를 가지고 단일 책임 원칙을 준수한다."], correctAnswer: 3, rationale: "응집도(Cohesion)가 높고 결합도(Coupling)가 낮은 설계는 독립성이 높아지므로 유지보수성(분석, 변경, 테스트)을 극대화하는 매우 좋은 구조입니다." },
    { id: 33, chapter: "ch4", question: "보안 테스트(모의 해킹)에서 해커(테스터)에게 시스템 아키텍처, 소스코드, 관리자 권한 등 내부 정보를 모두 투명하게 제공한 상태에서 수행하는 침투 테스트 방식은?", options: ["블랙박스 침투 테스트", "그레이박스 침투 테스트", "화이트박스(크리스탈 박스) 침투 테스트", "블라인드 테스트"], correctAnswer: 2, rationale: "내부의 모든 구조적 정보와 소스코드를 제공받아 내부자의 시각이나 완벽히 시스템을 파악한 상태에서 취약점을 찾아내는 방식을 화이트박스 페니트레이션 테스트라고 합니다." },
    { id: 34, chapter: "ch4", question: "평범한 트래픽(예: 동시 접속 100명)을 '매우 긴 시간(예: 일주일 연속)' 동안 시스템에 흘려보내는 테스트로, 시간이 지나야만 발현되는 메모리 누수나 데이터베이스 커넥션 풀 포화 등을 탐지하는 성능 테스트는?", options: ["스파이크 테스트", "스트레스 테스트", "내구성 테스트 (Soak/Endurance Testing)", "확장성 테스트"], correctAnswer: 2, rationale: "긴 시간 동안 시스템을 담가둔다는 의미에서 Soak Testing이라고도 하며, 장시간 운영 시 누적되는 시스템 리소스 결함을 찾기 위해 수행됩니다." },
    { id: 35, chapter: "ch4", question: "AWS 클라우드 환경에서 서버 인스턴스 개수를 2대에서 4대로 늘렸을 때(Scale-out), 시스템의 처리량(Throughput)도 정확히 2배 근처로 비례하여 증가하는지 확인하는 성능 특성 테스트는?", options: ["확장성 테스트 (Scalability Testing)", "신뢰성 테스트", "이식성 테스트", "사용성 테스트"], correctAnswer: 0, rationale: "확장성 테스트는 하드웨어 리소스나 서버 노드를 증설했을 때 소프트웨어 아키텍처가 병목 없이 트래픽 처리 능력을 선형적으로 확장(Scale)할 수 있는지 검증합니다." },
    { id: 36, chapter: "ch4", question: "악성 사용자가 웹 게시판 글쓰기 란에 `<script>alert(document.cookie);</script>` 같은 스크립트를 작성하여 저장했습니다. 다른 일반 사용자가 이 글을 읽을 때 스크립트가 실행되어 세션이 탈취당하는 보안 취약점은?", options: ["SQL Injection", "XSS (Cross-Site Scripting)", "DDoS 공격", "Man-in-the-middle"], correctAnswer: 1, rationale: "사용자의 입력을 검증/필터링하지 않고 웹 페이지에 그대로 출력하여 다른 사용자의 브라우저에서 스크립트가 실행되게 만드는 공격을 XSS라고 합니다." },
    { id: 37, chapter: "ch4", question: "소프트웨어 품질 모델(ISO 25010)에서 시간 동작(Time Behavior)과 자원 활용도(Resource Utilization)는 어떤 주요 품질 특성의 하위 요소인가?", options: ["보안성 (Security)", "신뢰성 (Reliability)", "성능 효율성 (Performance Efficiency)", "기능 적합성 (Functional Suitability)"], correctAnswer: 2, rationale: "성능 효율성은 지정된 조건에서 사용된 자원의 양 대비 성능의 정도를 의미하며, 응답 속도(시간 동작)와 CPU/메모리 사용률(자원 활용도)을 포함합니다." },
    { id: 38, chapter: "ch4", question: "치명적인 데이터베이스 셧다운이 발생했을 때, 백업 서버를 통해 시스템이 1시간 이내에 서비스를 재개(RTO)하고 데이터 손실을 최소화(RPO)하는 능력을 평가하는 신뢰성의 하위 특성은?", options: ["복구성 (Recoverability)", "성숙성 (Maturity)", "결함 허용성 (Fault Tolerance)", "가용성 (Availability)"], correctAnswer: 0, rationale: "장애나 충돌 이후 시스템의 데이터와 원래 성능 수준을 복원하는 능력을 복구성(Recoverability)이라고 합니다." },
    { id: 39, chapter: "ch4", question: "시스템을 변경(버그 패치 등)했을 때, 이 변경으로 인해 이전에 잘 작동하던 기능에 예기치 않은 오류가 발생하지 않는지 확인하는 테스트는 자동화가 필수적입니다. 유지보수성과 직결된 이 테스트는?", options: ["회귀 테스트 (Regression Testing)", "단위 테스트 (Unit Testing)", "보안 테스트", "내구성 테스트"], correctAnswer: 0, rationale: "코드 변경 시 다른 부분에 사이드 이펙트(부작용)가 발생하지 않았는지 검증하는 회귀 테스트가 용이해야 유지보수성이 뛰어나다고 평가받습니다." },

    // --- Chapter 5: Test Tools and Automation (Q40-Q45) ---
    { id: 40, chapter: "ch5", question: "비즈니스 로직을 '상태 전이 다이어그램' 등 수학적 모델로 정의하고, 요구사항이 바뀔 때 이 '모델'만 수정하면 테스트 케이스와 자동화 스크립트가 즉각 재생성되는 도구는?", options: ["결함 주입 도구 (Fault Injection Tool)", "모델 기반 테스팅 도구 (Model-Based Testing Tool, MBT)", "정적 분석 도구", "성능 테스트 도구"], correctAnswer: 1, rationale: "모델 기반 테스팅(MBT) 도구는 요구사항의 추상적 모델을 바탕으로 경로 탐색 알고리즘을 사용해 테스트 케이스 생성 프로세스를 완전히 자동화합니다." },
    { id: 41, chapter: "ch5", question: "단위 테스트를 자동화할 때(JUnit 등), 현재 개발 중인 컴포넌트가 아직 개발이 안 된 타 부서의 컴포넌트를 호출해야 합니다. 이때 응답을 강제로 설정하여 컴포넌트를 독립적으로 테스트하게 해주는 도구 기능은?", options: ["스니퍼 (Sniffer)", "모의 객체 (Mock / Stub) 생성기", "프로파일러 (Profiler)", "정적 린터 (Linter)"], correctAnswer: 1, rationale: "테스트 대상 코드를 격리(Isolation)하기 위해 외부 의존성 객체의 행동을 흉내내는 가짜 객체를 만드는 것을 Mocking 및 Stubbing이라고 합니다." },
    { id: 42, chapter: "ch5", question: "Netflix의 Chaos Monkey처럼 런타임에 실행 중인 서버의 네트워크 연결을 끊거나 가상 머신을 무작위로 종료시켜서 시스템의 '결함 허용성(Fault Tolerance)'과 이중화 복구 능력을 검증하는 도구는?", options: ["결함 주입 도구 (Fault Seeding / Injection Tool)", "형상 관리 도구", "구문 커버리지 도구", "정적 분석 도구"], correctAnswer: 0, rationale: "고의로 소프트웨어나 인프라에 결함과 장애를 주입하여 복구 메커니즘을 테스트하는 기법을 결함 주입 또는 카오스 엔지니어링이라고 합니다." },
    { id: 43, chapter: "ch5", question: "TTA가 CI(Continuous Integration) 파이프라인에 소스코드가 병합(Merge)되기 직전에 코딩 컨벤션 위반과 데드 코드를 막기 위해 자동화 파이프라인에 연동해야 할 도구는?", options: ["JMeter (성능 도구)", "SonarQube (정적 분석 도구)", "Selenium (UI 자동화 도구)", "Valgrind (메모리 누수 동적 분석 도구)"], correctAnswer: 1, rationale: "소스 코드를 실행하지 않고 병합 전 단계에서 코드 구조, 문법, 순환 복잡도 등을 점검하려면 정적 코드 분석 도구를 연동해야 합니다." },
    { id: 44, chapter: "ch5", question: "성능 효율성 테스트 도구(LoadRunner, JMeter 등)가 부하를 생성하는 기본적인 방식은?", options: ["실제 수만 대의 스마트폰 기기 팜(Device Farm)을 물리적으로 대여하여 요청을 보낸다.", "가상 사용자(Virtual User) 스크립트를 생성하고 스레드를 분기하여 서버에 다량의 네트워크 프로토콜(HTTP 등) 요청을 전송한다.", "서버의 데이터베이스 데이터를 수만 배로 뻥튀기시켜 쿼리 속도를 느리게 만든다.", "도구가 서버의 소스 코드를 읽어 시간 지연(sleep) 로직을 강제로 삽입한다."], correctAnswer: 1, rationale: "성능 도구는 프로토콜 계층(HTTP, 소켓 등)에서 동작하는 가상 사용자(VUser) 스레드를 대량으로 생성하여 실제 클라이언트들이 동시 접속하는 것과 같은 네트워크 트래픽을 서버에 인가합니다." },
    { id: 45, chapter: "ch5", question: "성능 측정 과정에서 도구 자체가 트래픽을 생성하다가 CPU와 메모리 한계에 도달하여, 실제 서버의 성능 한계가 아님에도 응답 시간이 느려지는 현상이 관찰되었습니다. TTA의 조치로 적절한 것은?", options: ["서버의 코드를 리팩토링하여 응답 시간을 단축한다.", "부하를 발생시키는 도구 서버(Load Generator)의 리소스 병목을 의심하고 로드 제너레이터 인스턴스를 여러 대로 확장(분산 부하)한다.", "정적 분석을 수행하여 도구의 버그를 고친다.", "스트레스 테스트로 전환한다."], correctAnswer: 1, rationale: "클라이언트 측(도구 구동 서버)의 리소스 한계로 인해 부하를 충분히 쏘지 못하는 병목 현상이 발생할 수 있습니다. 이때는 마스터-슬레이브 구조로 부하 발생기를 스케일 아웃해야 합니다." }
];

// User Progress Simulation
let userState = {
    totalQuizzesTaken: 0,
    averageScore: 0,
    lastScore: 0,
    recentIncorrect: []
};
