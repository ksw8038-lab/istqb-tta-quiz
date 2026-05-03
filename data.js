// data.js - ISTQB Advanced Level TTA (v4.0 기반 심화 학습 자료 및 시나리오 모의고사)

const syllabusTopics = [
    {
        id: "ch1",
        title: "1. 리스크 기반 테스팅에서의 TTA 역할",
        desc: "기술적 리스크를 식별하고, 평가하며, 완화하기 위한 전략을 깊이 있게 배웁니다.",
        icon: "fa-triangle-exclamation",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">1.1 기술적 리스크 식별 (Risk Identification)</h3>
                <p style="margin-bottom: 1rem;">리스크 기반 테스팅(RBT)에서 TTA(Technical Test Analyst)의 핵심 임무는 아키텍처, 데이터베이스, 인프라, 보안, 성능 등과 관련된 <strong>'기술적(Technical)' 리스크</strong>를 식별하는 것입니다. 비즈니스 리스크(예: 고객 이탈, 마케팅 실패)는 테스트 매니저(TM)나 비즈니스 분석가(BA)의 영역입니다.</p>
                
                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">📌 TTA가 식별해야 할 주요 기술적 리스크 요인:</h4>
                <ul style="margin-top: 0.5rem; margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>복잡성:</strong> 시스템의 구조적 복잡도(예: 높은 순환 복잡도)나 인터페이스 복잡성.</li>
                    <li><strong>신기술 도입:</strong> 시장에서 한 번도 검증되지 않은 새로운 언어나 프레임워크 사용.</li>
                    <li><strong>개발자 역량:</strong> 특정 도메인이나 기술에 대한 개발팀의 경험 및 숙련도 부족.</li>
                    <li><strong>레거시 통합:</strong> 문서화가 제대로 되어 있지 않은 레거시 시스템과의 인터페이스 연동 시 발생하는 불확실성.</li>
                    <li><strong>비기능적 요구사항(NFR):</strong> 성능, 보안, 신뢰성과 같은 비기능적 품질 목표 달성 실패 가능성.</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">1.2 기술적 리스크 평가 (Risk Assessment)</h3>
                <p style="margin-bottom: 1rem;">리스크는 일반적으로 <strong>리스크 수준(Risk Level) = 발생 가능성(Likelihood) × 영향도(Impact)</strong> 공식을 통해 산정됩니다.</p>
                <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-left: 4px solid var(--warning); margin-bottom: 1rem;">
                    <strong>TTA의 주요 역할:</strong> TTA는 주로 <strong>'결함 발생 가능성(Likelihood)'</strong>을 평가하는 데 전문성을 발휘합니다. 영향도(Impact) 평가는 주로 비즈니스 이해관계자나 TM이 수행합니다.
                </div>
                <p>예를 들어, "이 모듈은 데이터베이스 동시 접근 락(Lock)을 많이 사용하므로 경합이 일어날 <strong>가능성(Likelihood)이 매우 높습니다.</strong>"라고 TTA가 의견을 내면, 비즈니스 측면에서 "결제가 안 되면 수십억 원의 <strong>손실(Impact)이 발생합니다.</strong>"라고 판단하여 해당 모듈을 <strong>'최우선 순위 (High Risk)'</strong>로 분류합니다.</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">1.3 리스크 완화 (Risk Mitigation)</h3>
                <p style="margin-bottom: 1rem;">리스크 평가가 끝나면, 도출된 리스크 수준에 비례하여 테스트 전략을 할당해야 합니다. 이를 리스크 완화라고 합니다.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden;">
                    <thead style="background: var(--bg-secondary);">
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--glass-border);">리스크 수준</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--glass-border);">TTA의 완화 전략 예시</th>
                        </tr>
                    </thead>
                    <tbody style="color: var(--text-secondary);">
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong>높음 (High)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">엄격한 MC/DC 커버리지 100% 요구, 화이트박스 페니트레이션 테스트 수행, 정적/동적 분석 필수 적용</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong>중간 (Medium)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">결정 커버리지(Decision Coverage) 100% 달성, 기본 부하 테스트 수행</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;"><strong>낮음 (Low)</strong></td>
                            <td style="padding: 1rem;">구문 커버리지(Statement Coverage) 달성, 기본 블랙박스 테스트 및 해피 패스 중심 테스트</td>
                        </tr>
                    </tbody>
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
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">2.1 기본 커버리지: 구문, 결정, 조건</h3>
                
                <h4 style="margin-top: 1rem; color: var(--text-primary);">[1] 구문 커버리지 (Statement Coverage)</h4>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">소스 코드의 모든 실행 가능한 문장(Statement)이 최소 한 번씩 실행되었는지를 측정합니다. 구조 기반 테스팅의 가장 기초적인 단계입니다.</p>
                <div style="background: #1e1e1e; padding: 1rem; border-radius: 6px; font-family: monospace; color: #d4d4d4; margin-bottom: 1rem;">
                    IF (A > 0) THEN<br>
                    &nbsp;&nbsp;Print("Positive")<br>
                    END IF
                </div>
                <p style="font-size: 0.9rem;">-> A=1 인 테스트 케이스 1개만 있으면 구문 커버리지 100% 달성. (하지만 A<=0 일 때의 잠재적 오류는 발견 불가)</p>

                <h4 style="margin-top: 1.5rem; color: var(--text-primary);">[2] 결정 커버리지 (Decision / Branch Coverage)</h4>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">모든 제어문(IF, WHILE, CASE)의 분기 결과가 <strong>참(True)과 거짓(False)</strong>을 최소 한 번씩 가지도록 합니다. 결정 커버리지 100%는 구문 커버리지 100%를 보장합니다.</p>
                <p style="font-size: 0.9rem;">-> 위의 예제에서 A=1 (True 분기), A=0 (False 분기) 총 2개의 테스트 케이스 필요.</p>

                <h4 style="margin-top: 1.5rem; color: var(--text-primary);">[3] 조건 커버리지 (Condition Coverage)</h4>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">결정문을 구성하는 <strong>'개별 조건(Atomic Condition)'</strong>이 각각 참과 거짓을 평가받도록 합니다. <br>
                <span style="color: var(--danger);">주의:</span> 조건 커버리지 100%가 결정 커버리지 100%를 보장하지는 않습니다. (예: <code>IF (A OR B)</code>에서 TC1(A=T, B=F), TC2(A=F, B=T)일 때, A와 B는 모두 T/F를 가졌지만 IF문 자체의 결과는 모두 True임)</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid var(--warning);">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">2.2 변경 조건/결정 커버리지 (MC/DC) ★ 매우 중요</h3>
                <p style="margin-bottom: 1rem;">MC/DC(Modified Condition/Decision Coverage)는 항공, 의료, 자동차(ISO 26262) 등 안전 필수 시스템에서 국제 표준으로 요구되는 기법입니다.</p>
                <p style="margin-bottom: 1rem;"><strong>핵심 원리:</strong> 각 개별 조건이 <strong>'독립적으로(Independently)'</strong> 전체 결정 결과에 영향을 미친다는 것을 증명해야 합니다. 즉, 평가하려는 조건 하나만 True->False로 바뀔 때, 다른 조건들은 고정되어 있고, 전체 IF문의 결과도 함께 True->False(또는 그 반대)로 바뀌는 <strong>쌍(Pair)</strong>을 찾아야 합니다.</p>
                
                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">MC/DC 예제: 'IF (A AND B)'</h4>
                <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; font-size: 0.9rem; text-align: center;">
                    <thead style="background: var(--bg-secondary);">
                        <tr><th>TC 번호</th><th>A</th><th>B</th><th>결과 (A AND B)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>TC 1</td><td><strong style="color:var(--success)">T</strong></td><td>T</td><td>T</td></tr>
                        <tr><td>TC 2</td><td><strong style="color:var(--danger)">F</strong></td><td>T</td><td>F</td></tr>
                        <tr><td>TC 3</td><td>T</td><td><strong style="color:var(--danger)">F</strong></td><td>F</td></tr>
                        <tr><td>TC 4</td><td>F</td><td>F</td><td>F</td></tr>
                    </tbody>
                </table>
                <ul style="margin-top: 1rem; margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">
                    <li><strong>A의 독립적 영향 증명:</strong> B가 True로 고정된 상태에서, A가 T->F로 바뀔 때 결과가 T->F로 바뀌는 <strong>TC1과 TC2</strong> 페어 선택.</li>
                    <li><strong>B의 독립적 영향 증명:</strong> A가 True로 고정된 상태에서, B가 T->F로 바뀔 때 결과가 T->F로 바뀌는 <strong>TC1과 TC3</strong> 페어 선택.</li>
                    <li>따라서 최소 필요한 테스트 케이스 집합은 <strong>{TC1, TC2, TC3}</strong> 입니다.</li>
                </ul>
                <div style="background: rgba(59, 130, 246, 0.2); padding: 0.75rem; border-radius: 6px; margin-top: 1rem; text-align: center; font-weight: bold;">
                    공식: 조건이 N개일 때, MC/DC 달성을 위한 최소 테스트 케이스 수는 N + 1 개 입니다.
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">2.3 다중 조건(Multiple Condition) 및 경로(Path) 테스팅</h3>
                <p style="margin-bottom: 1rem; color: var(--text-secondary);"><strong>다중 조건 테스팅:</strong> 모든 개별 조건들의 조합(진리표 전체)을 평가합니다. 조건이 N개면 <strong>2^N</strong> 개의 테스트 케이스가 필요합니다. 가장 완벽하지만 실무에서는 폭발적인 조합의 증가(Combinatorial Explosion)로 인해 잘 쓰이지 않으며 MC/DC가 선호됩니다.</p>
                <p style="color: var(--text-secondary);"><strong>경로 테스팅(Path Testing):</strong> 제어 흐름 그래프(CFG)의 시작 노드부터 종료 노드까지 연결되는 가능한 모든 '고유 경로'를 최소 한 번씩 지나는 테스트입니다. 루프(Loop)가 존재하면 경로가 무한대가 될 수 있어 루프 순회 횟수를 제한하여 테스트합니다.</p>
            </div>
        `
    },
    {
        id: "ch3",
        title: "3. 분석 기법 (정적/동적 분석 및 데이터 흐름)",
        desc: "코드를 실행하지 않는 정적 분석과 런타임 환경을 모니터링하는 동적 분석의 차이점.",
        icon: "fa-magnifying-glass-chart",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">3.1 정적 분석 개요 (Static Analysis)</h3>
                <p style="margin-bottom: 1rem;">소프트웨어를 <strong>실행하지 않고(Without Executing)</strong> 소스 코드나 모델을 분석하여 결함을 식별합니다. 개발 프로세스 초기에 적용할 수 있어 결함 수정 비용이 가장 저렴합니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li>코딩 표준 위반 (예: MISRA C/C++, CERT 규칙 위반) 점검</li>
                    <li>문법적 오류 및 들여쓰기 위반 점검</li>
                    <li>제어 흐름 분석 및 데이터 흐름 분석</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">3.2 제어 흐름 분석 (Control Flow Analysis)</h3>
                <p style="margin-bottom: 1rem;">코드가 실행되는 순서(경로)를 추적하여 구조적 문제를 식별합니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>도달할 수 없는 코드 (Dead Code/Unreachable Code):</strong> 어떤 입력값으로도 도달할 수 없는 노드 식별.</li>
                    <li><strong>무한 루프:</strong> 종료 조건이 없는 루프 구조 식별.</li>
                </ul>
                <div style="background: #1e1e1e; padding: 1rem; border-radius: 6px; margin-top: 1rem;">
                    <h4 style="color: var(--warning); margin-bottom: 0.5rem;">💡 McCabe의 순환 복잡도 (Cyclomatic Complexity)</h4>
                    <p style="color: #d4d4d4; font-size: 0.95rem;">코드 내의 선형적으로 독립적인 실행 경로의 개수를 나타냅니다. 복잡도가 높을수록(통상 10 이상) 테스트하기 어렵고 버그 발생 확률이 높습니다.</p>
                    <p style="color: var(--accent); font-weight: bold; font-size: 1.1rem; text-align: center; margin-top: 0.5rem;">공식: V(G) = E - N + 2</p>
                    <p style="color: #888; font-size: 0.85rem; text-align: center;">(E: 간선의 수, N: 노드의 수, 강하게 연결된 그래프 기준)</p>
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">3.3 데이터 흐름 분석 (Data Flow Analysis)</h3>
                <p style="margin-bottom: 1rem;">변수의 수명 주기를 상태 모델로 추적하여, 변수가 부적절하게 사용되는지 검사합니다. 변수 상태는 크게 <strong>정의(Define), 사용(Use), 소멸/해제(Kill)</strong>로 나뉩니다.</p>
                <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; font-size: 0.95rem;">
                    <thead style="background: var(--bg-secondary);">
                        <tr><th style="padding: 1rem; text-align: left;">이상 징후 패턴</th><th style="padding: 1rem; text-align: left;">설명 및 위험성</th></tr>
                    </thead>
                    <tbody style="color: var(--text-secondary);">
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong style="color: var(--danger);">UR (Use before Define)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">값을 할당(정의)하기도 전에 사용하려고 함. 치명적인 런타임 오류나 쓰레기 값을 초래합니다.</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong style="color: var(--warning);">DD (Define-Define)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">변수를 할당한 후 한 번도 읽지 않고 다시 할당함. 불필요한 연산이거나, 로직 누락 버그의 증거입니다.</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;"><strong style="color: var(--warning);">DU (Define-Undefine)</strong></td>
                            <td style="padding: 1rem;">변수를 정의해 놓고 전혀 사용하지 않고 스코프가 끝나 소멸(Kill)됨. 데드 변수입니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--success);">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">3.4 동적 분석 (Dynamic Analysis)</h3>
                <p style="margin-bottom: 1rem;">소프트웨어를 실제로 <strong>실행(Run)</strong>하면서 메모리 힙, 스택, 스레드 활동을 실시간으로 모니터링합니다. 주로 C/C++ 같은 비관리형(Unmanaged) 메모리 언어에서 중요합니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>메모리 누수 (Memory Leak):</strong> malloc/new로 할당된 메모리가 free/delete 되지 않아 점진적으로 가용 메모리가 소진되어 시스템이 중단(OOM)되는 현상.</li>
                    <li><strong>댕글링 포인터 (Dangling Pointer):</strong> 이미 해제된 메모리 영역의 주소를 여전히 가리키고 있는 포인터를 사용하려 하여 충돌(Crash) 발생.</li>
                    <li><strong>교착 상태 및 경합 (Deadlock & Race Condition):</strong> 멀티 스레딩 환경에서 스레드 간 락(Lock) 순서 꼬임 현상.</li>
                </ul>
            </div>
        `
    },
    {
        id: "ch4",
        title: "4. 기술적 품질 특성 (ISO 25010 기반)",
        desc: "비기능 요구사항을 달성하기 위한 성능, 보안, 신뢰성, 유지보수성 깊이 파고들기.",
        icon: "fa-shield-halved",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">4.1 보안성 테스트 (Security Testing)</h3>
                <p style="margin-bottom: 1rem;">비인가된 접근으로부터 데이터를 보호하고, 해킹 공격에 견고하게 대응하는 특성입니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>SQL 인젝션 (SQLi):</strong> 입력 필드에 악의적 쿼리를 삽입하여 DB를 조작. 예방을 위해 'Prepared Statements(준비된 구문)'를 사용해야 함.</li>
                    <li><strong>크로스 사이트 스크립팅 (XSS):</strong> 웹 페이지에 악성 스크립트를 심어 다른 사용자의 브라우저에서 실행되게 함 (세션 탈취 등). 입출력 데이터 무결성 필터링 필요.</li>
                    <li><strong>버퍼 오버플로우:</strong> 메모리 버퍼 한계를 초과하는 데이터를 입력하여 인접한 메모리(실행 영역)를 덮어쓰고 제어권을 탈취.</li>
                    <li><strong>모의 해킹(Penetration Testing):</strong> 윤리적 해커가 블랙박스/화이트박스 방식으로 시스템을 공격하여 취약점을 리포팅하는 동적 기법.</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">4.2 성능 효율성 테스트 (Performance Efficiency)</h3>
                <p style="margin-bottom: 1rem;">시스템이 자원을 얼마나 적게 사용하며 빠르게 응답하는지 검증합니다. 시간 동작(응답시간), 자원 활용도(CPU/메모리율), 수용성(최대 처리량)을 봅니다.</p>
                <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; font-size: 0.95rem;">
                    <thead style="background: var(--bg-secondary);">
                        <tr><th style="padding: 1rem; text-align: left;">성능 테스트 유형</th><th style="padding: 1rem; text-align: left;">목적 및 특징</th></tr>
                    </thead>
                    <tbody style="color: var(--text-secondary);">
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong>부하 테스트 (Load Testing)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">예상되는 <strong>정상 최대 부하(Peak)</strong> 상태에서 성능 요구사항이 준수되는지 확인.</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong>스트레스 테스트 (Stress Testing)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">시스템의 <strong>설계 한계를 초과</strong>하는 극한의 부하를 주어, 시스템이 어떻게 파괴(Breaking)되고 장애 발생 시 어떤 모습으로 복구(Recovery)되는지 관찰.</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);"><strong>내구성 테스트 (Soak/Endurance)</strong></td>
                            <td style="padding: 1rem; border-bottom: 1px solid var(--glass-border);">평범한 부하를 <strong>매우 긴 시간(수일~수주)</strong> 동안 인가. 시간이 지나야 드러나는 메모리 누수, 캐시 포화 등을 식별.</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;"><strong>스파이크 테스트 (Spike Testing)</strong></td>
                            <td style="padding: 1rem;">짧은 시간 동안 트래픽이 <strong>순간적으로 폭증</strong>할 때 (예: 수강신청, 특가 세일) 시스템의 대응 능력 평가.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">4.3 신뢰성 (Reliability)</h3>
                <p style="margin-bottom: 1rem;">시스템이 일정한 조건에서 무장애 상태로 장기간 운영될 수 있는 능력입니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>결함 허용성 (Fault Tolerance):</strong> 하드웨어 일부(예: 디스크)나 소프트웨어에 결함이 생겨도 시스템이 멈추지 않고 서비스를 제공하는 능력 (서버 이중화, RAID).</li>
                    <li><strong>복구성 (Recoverability):</strong> 치명적인 장애가 발생했을 때 백업 데이터를 통해 얼마나 빠르고 완벽하게 시스템을 복구할 수 있는지 (RTO, RPO 지표 관리).</li>
                    <li><strong>성숙성 (Maturity):</strong> 시간이 지남에 따라 시스템 내부의 결함이 조치되어 점점 신뢰도가 높아지는 정도.</li>
                </ul>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">4.4 유지보수성 및 이식성</h3>
                <p style="margin-bottom: 1rem;"><strong>유지보수성 (Maintainability):</strong> 소스 코드가 얼마나 깨끗하게 작성되었는지 평가. 높은 응집도(Cohesion)와 낮은 결합도(Coupling)가 목표. 모듈성, 분석성, 수정성, 테스트 용이성을 봅니다. (순환 복잡도를 모니터링하여 유지보수성 저하를 방지)</p>
                <p><strong>이식성 (Portability):</strong> 애플리케이션을 새로운 클라우드 환경, 다른 OS로 옮길 때 얼마나 쉽게 이전되는가. 적응성(Adaptability), 설치성, 대체성(Replaceability)을 포함합니다.</p>
            </div>
        `
    },
    {
        id: "ch5",
        title: "5. 테스트 도구 및 자동화",
        desc: "TTA 환경에서 활용되는 다양한 자동화 및 검증 도구의 메커니즘 심층 분석.",
        icon: "fa-wrench",
        content: `
            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">5.1 모델 기반 테스팅 도구 (MBT Tools)</h3>
                <p style="margin-bottom: 1rem;">모델 기반 테스팅(Model-Based Testing)은 시스템의 요구사항과 비즈니스 로직을 추상화된 모델(예: 상태 전이 다이어그램, UML)로 구축하고, MBT 도구가 이 모델을 파싱하여 논리적인 경로(Path)를 계산한 뒤, 테스트 케이스와 자동화 스크립트를 자동으로 쏟아내는 혁신적인 접근법입니다.</p>
                <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-left: 4px solid var(--success);">
                    <strong>가장 큰 장점:</strong> 시스템 요구사항이 변경되었을 때, 테스트 케이스를 수작업으로 수정할 필요 없이 <strong>'모델만 수정(Update Model)'</strong>하면 도구가 새로운 테스트 스크립트를 즉시 재생성해 주어 유지보수 비용이 획기적으로 절감됩니다.
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">5.2 결함 주입 도구 (Fault Injection / Chaos Tools)</h3>
                <p style="margin-bottom: 1rem;">결함 주입 도구는 시스템이 가장 완벽하게 돌아가고 있을 때 고의로 방해 공작을 펼칩니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li>하드웨어적 결함 주입: 네트워크 선 단절, 서버 인스턴스 임의 셧다운(예: Netflix Chaos Monkey), 디스크 가득 채우기.</li>
                    <li>소프트웨어적 결함 주입: 런타임에 메모리 변조, 파일 읽기/쓰기 권한 강제 삭제, API 응답 지연(Timeout) 유도.</li>
                </ul>
                <p style="margin-top: 0.5rem; color: var(--text-primary);"><strong>목적:</strong> 이러한 극한 상황에서 시스템의 <strong>결함 허용성(Fault Tolerance)</strong> 로직이 정상 작동하여 다른 서버로 페일오버(Failover) 되는지 확인하는 것입니다.</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.4rem;">5.3 컴포넌트 자동화 테스팅 및 빌드 도구</h3>
                <p style="margin-bottom: 1rem;">단위 테스팅 도구(xUnit 프레임워크 기반 - JUnit, NUnit 등)는 개발자와 TTA가 화이트박스 커버리지를 달성하는 코드를 자동화하여 실행할 수 있게 돕습니다.</p>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>Mock과 Stub의 활용:</strong> 아직 개발되지 않은 하위 모듈이나, 통신이 느린 외부 시스템(결제 API 등)을 흉내내는 Mock 객체를 생성하여 철저히 <strong>'격리된(Isolated)'</strong> 컴포넌트 환경을 구축합니다.</li>
                    <li><strong>CI/CD 연동:</strong> 빌드 서버(Jenkins 등)와 연동하여 커밋 시마다 정적 분석기(SonarQube 등)와 컴포넌트 단위 테스트가 자동으로 돌아가도록 파이프라인을 구축합니다.</li>
                </ul>
            </div>
        `
    }
];

// 기본 한국어 심화 질문 10개 (기존 유지)
const baseQuestions = [
    {
        chapter: "ch2",
        question: "다음 코드 스니펫을 고려해 보십시오:\n\nIF (A AND B) OR C THEN\n  DO X\nELSE\n  DO Y\nENDIF\n\n100% 구문 커버리지(Statement Coverage)를 달성하기 위해 필요한 최소 테스트 케이스 수는 몇 개입니까?",
        options: ["1개", "2개", "3개", "4개"],
        correctAnswer: 1, // 2개
        rationale: "100% 구문 커버리지를 달성하려면 'DO X'와 'DO Y'가 모두 한 번씩 실행되어야 합니다. 따라서 결정문이 참(True)이 되는 테스트 케이스 1개, 거짓(False)이 되는 테스트 케이스 1개가 필요합니다. 총 2개입니다."
    },
    {
        chapter: "ch2",
        question: "다음 구조 기반 테스트 설계 기법 중 가장 높은 수준의 커버리지와 엄격함을 제공하는 것은 무엇입니까?",
        options: ["결정 커버리지 (Decision Coverage)", "조건 커버리지 (Condition Coverage)", "변경 조건/결정 커버리지 (MC/DC)", "다중 조건 커버리지 (Multiple Condition Coverage)"],
        correctAnswer: 3, // 다중 조건
        rationale: "다중 조건 커버리지는 조건들의 가능한 모든 조합을 테스트하도록 요구합니다. 가장 엄격하며 100% 달성 시 구문, 결정, 조건, MC/DC 커버리지를 모두 달성하게 되지만, 가장 많은 시간이 소요됩니다."
    },
    {
        chapter: "ch3",
        question: "정적 분석에서 '데이터 흐름 분석(Data Flow Analysis)'이 주로 탐지하고자 하는 이상 징후는 다음 중 무엇입니까?",
        options: ["도달할 수 없는 코드 (데드 코드)", "무한 루프", "초기화(정의)되기 전에 사용된 변수", "실행 중 발생하는 메모리 누수"],
        correctAnswer: 2, // 초기화 전 사용
        rationale: "데이터 흐름 분석은 변수의 생명주기(정의, 사용, 소멸)를 추적합니다. 특히 '정의 전 사용(UR 이상)' 또는 '사용 없이 연속된 정의(DD 이상)'를 찾는데 매우 유용합니다."
    },
    {
        chapter: "ch4",
        question: "시스템이 고장(Fail)이 나는 한계점을 파악하고 어떻게 복구되는지 관찰하기 위해 설계된 테스트는 무엇입니까?",
        options: ["부하 테스트 (Load Testing)", "스트레스 테스트 (Stress Testing)", "확장성 테스트 (Scalability Testing)", "보안성 테스트 (Security Testing)"],
        correctAnswer: 1, // 스트레스 테스트
        rationale: "스트레스 테스트는 시스템을 예상 한계 이상으로 밀어붙여 실패가 발생하는 시점(Breaking point)을 확인하고 시스템의 기능 저하 및 복구 능력을 관찰하는 테스트입니다."
    },
    {
        chapter: "ch1",
        question: "기술적 리스크 분석 시 리스크 수준(Risk Level)을 계산하기 위해 곱해지는 두 가지 주요 요소는 무엇입니까?",
        options: ["비용과 일정 (Cost and Schedule)", "발생 가능성과 영향도 (Likelihood and Impact)", "확률과 빈도 (Probability and Frequency)", "복잡성과 규모 (Complexity and Size)"],
        correctAnswer: 1, // 가능성과 영향도
        rationale: "리스크 수준은 일반적으로 결함이 발생할 가능성(Likelihood)에 그 실패가 가져올 피해의 심각성 즉 영향도(Impact)를 곱하여 산출됩니다."
    },
    {
        chapter: "ch3",
        question: "강하게 연결된 그래프에 대한 McCabe의 순환 복잡도 공식은 v = E - N + 2P 입니다. 여기서 'E'가 의미하는 것은 무엇입니까?",
        options: ["진입점의 수 (Number of Entry points)", "간선의 수 (Number of Edges)", "실행 가능한 구문의 수 (Number of Executable statements)", "예상되는 오류 수 (Number of Errors expected)"],
        correctAnswer: 1, // 간선의 수
        rationale: "제어 흐름 그래프에서 'E'는 간선(Edges, 링크)의 수를 의미하며, 'N'은 노드(Nodes)의 수를 뜻합니다."
    },
    {
        chapter: "ch4",
        question: "명시된 조건 하에서 시스템이 리소스를 얼마나 효과적으로 활용하는지에 초점을 맞추는 품질 특성은 무엇입니까?",
        options: ["신뢰성 (Reliability)", "성능 효율성 (Performance Efficiency)", "사용성 (Usability)", "유지보수성 (Maintainability)"],
        correctAnswer: 1, // 성능 효율성
        rationale: "성능 효율성(Performance Efficiency)은 명시된 조건 하에서 시스템의 응답 시간, 처리 시간 및 리소스 활용도를 평가하는 특성입니다."
    },
    {
        chapter: "ch2",
        question: "'A AND B'라는 결정문에 대해 MC/DC 커버리지를 달성하기 위해 필요한 최소 테스트 케이스 수는 몇 개입니까?",
        options: ["2개", "3개", "4개", "8개"],
        correctAnswer: 1, // 3개
        rationale: "N개의 조건이 있을 때 MC/DC를 달성하기 위한 최소 테스트 케이스 수는 N+1개입니다. 'A AND B'는 2개의 조건이므로 2+1 = 3개의 테스트 케이스(예: True-True, True-False, False-True)가 필요합니다."
    },
    {
        chapter: "ch4",
        question: "소프트웨어 내의 '메모리 누수(Memory Leak)'는 다음 중 어떤 유형의 성능 테스트를 통해 가장 잘 발견될 수 있습니까?",
        options: ["스파이크 테스트 (Spike Testing)", "스트레스 테스트 (Stress Testing)", "내구성 테스트 (Endurance Testing / Soak Testing)", "동시성 테스트 (Concurrency Testing)"],
        correctAnswer: 2, // 내구성 테스트
        rationale: "내구성 테스트(Endurance/Soak Testing)는 예상되는 부하 상태에서 시스템을 장시간 실행하여 메모리 누수와 같은 시간이 지남에 따라 악화되는 결함을 찾아냅니다."
    },
    {
        chapter: "ch3",
        question: "변수에 값을 정의한 후, 그 값이 사용되기 전에 다른 값으로 다시 정의되는 것을 의미하는 데이터 흐름 이상 징후는 무엇입니까?",
        options: ["UR (Use-Reference)", "DD (Define-Define)", "DU (Define-Use)", "KU (Kill-Use)"],
        correctAnswer: 1, // DD
        rationale: "DD (Define-Define) 이상 징후는 변수가 정의된 후 한 번도 사용되지 않고 다시 재정의되는 경우를 말하며, 불필요한 코드이거나 버그의 징후일 수 있습니다."
    }
];

const quizQuestions = [];

// 총 45문제 생성
for(let i = 0; i < 45; i++) {
    if (i < baseQuestions.length) {
        quizQuestions.push({
            id: i + 1,
            ...baseQuestions[i]
        });
    } else {
        const topics = ["ch1", "ch2", "ch3", "ch4", "ch5"];
        const topic = topics[i % 5];
        let qText = "";
        let ops = [];
        let ans = 0;
        let rationale = "";

        if(topic === "ch1") {
            qText = `[모의 문항 ${i+1}] 리스크 기반 테스트 계획 수립 단계에서 TTA가 우선순위를 도출할 때 사용할 기술적 리스크 요인으로 가장 적합한 것은?`;
            ops = ["제품 출시 지연에 따른 시장 선점 실패 가능성", "새로운 오픈소스 라이브러리 도입으로 인한 아키텍처 호환성 문제", "경쟁사의 유사 제품 출시 임박", "경영진의 예산 삭감 지시"];
            ans = 1;
            rationale = "오픈소스 라이브러리와 아키텍처 호환성은 내부 소프트웨어 구조에 영향을 미치는 명백한 '기술적 리스크' 요인입니다.";
        } else if (topic === "ch2") {
            qText = `[모의 문항 ${i+1}] 결정문 \`IF (X OR Y OR Z)\` 에 대해 MC/DC(변경 조건/결정 커버리지)를 100% 달성하기 위한 최소 테스트 케이스 집합의 크기는 얼마인가?`;
            ops = ["3개", "4개", "7개", "8개"];
            ans = 1;
            rationale = "MC/DC 기법에서 필요한 최소 테스트 케이스 수는 '조건의 수(N) + 1' 입니다. 조건이 X, Y, Z 총 3개이므로 4개의 테스트 케이스가 필요합니다.";
        } else if (topic === "ch3") {
            qText = `[모의 문항 ${i+1}] C++ 기반 시스템에서 이미 해제(free)된 메모리 공간을 여전히 가리키고 있는 포인터를 사용하려다 시스템 충돌이 발생했습니다. 이러한 결함을 무엇이라 부르며, 어떤 분석으로 찾아낼 수 있습니까?`;
            ops = ["데이터 레이스(Data Race) / 정적 분석", "댕글링 포인터(Dangling Pointer) / 동적 분석", "버퍼 오버플로우 / 제어 흐름 분석", "메모리 누수 / 정적 분석"];
            ans = 1;
            rationale = "해제된 메모리를 가리키는 포인터 버그를 댕글링 포인터라고 하며, 런타임에 주소 할당을 추적해야 하므로 동적 분석(Dynamic Analysis) 도구를 통해 찾아야 합니다.";
        } else if (topic === "ch4") {
            qText = `[모의 문항 ${i+1}] 소프트웨어 모듈의 결합도(Coupling)를 최대한 낮추고 응집도(Cohesion)를 높게 설계했습니다. 이 구조적 개선이 가장 큰 긍정적 효과를 미치는 품질 특성은 무엇입니까?`;
            ops = ["유지보수성 (Maintainability)", "시간 동작 성능 (Time Behavior)", "자원 활용도 (Resource Utilization)", "성숙성 (Maturity)"];
            ans = 0;
            rationale = "결합도가 낮고 응집도가 높은 설계는 각 모듈이 독립성을 가지게 되어 코드 분석과 수정, 테스트가 매우 쉬워지므로 유지보수성이 획기적으로 향상됩니다.";
        } else {
            qText = `[모의 문항 ${i+1}] 요구사항과 상태 전이도를 모델링한 후, 해당 모델에서 자동으로 경로를 탐색하여 테스트 스크립트를 생성해주는 도구를 무엇이라고 합니까?`;
            ops = ["동적 코드 분석 도구", "모델 기반 테스팅 도구 (Model-Based Testing Tool)", "성능 부하 생성 도구", "오픈소스 모의 해킹 툴"];
            ans = 1;
            rationale = "모델 기반 테스팅(MBT) 도구는 추상화된 모델을 기반으로 수학적인 경로 연산을 거쳐 테스트 케이스를 자동 생성해 줍니다.";
        }

        quizQuestions.push({
            id: i + 1,
            chapter: topic,
            question: qText,
            options: ops,
            correctAnswer: ans,
            rationale: rationale
        });
    }
}

// User Progress Simulation
let userState = {
    totalQuizzesTaken: 0,
    averageScore: 0,
    lastScore: 0,
    recentIncorrect: []
};
