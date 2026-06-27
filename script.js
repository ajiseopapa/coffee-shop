// 원두 가상 데이터베이스 (가게별 가격 및 개별 설명 포함)
const beanDB = [
    {
        name: "에티오피아 코체르 G1",
        tag: "Single Origin",
        icon: '<i class="fa-solid fa-leaf" style="color: #c2d1c2;"></i>',
        notes: "자스민, 화사한 레몬그라스, 홍차와 같은 실키한 텍스처",
        traits: { acidity: "high", body: "light", caffeine: "regular" },
        shops: [
            { name: "가게 A (bm로스터스)", price: 16000, desc: "약배전 로스팅 기법을 활용하여 원두 고유의 화사한 과일 꽃 향미와 레몬그라스의 생동감 넘치는 산미를 극대화했습니다." },
            { name: "가게 B (무드커피)", price: 15800, desc: "균형 잡힌 산미를 유도하여 지나치게 시지 않고 데일리로 부드럽게 마시기 편안하도록 로스팅 포인트를 잡았습니다." },
            { name: "가게 C (카페 빈즈)", price: 16500, desc: "전통적인 핸드드립 전용 타겟으로, 첫 모금의 자스민 향부터 목넘김 후의 홍차 같은 여운을 길게 늘렸습니다." }
        ]
    },
    {
        name: "디프 브라운 블렌드",
        tag: "Signature Blend",
        icon: '<i class="fa-solid fa-cookie" style="color: #dec8b0;"></i>',
        notes: "다크 초콜릿, 오곡 쿠키의 묵직한 바디감과 뛰어난 단맛",
        traits: { acidity: "low", body: "heavy", caffeine: "regular" },
        shops: [
            { name: "가게 A (bm로스터스)", price: 14500, desc: "중강배전의 정석으로 에스프레소 추출 시 진한 카카오와 오곡 쿠키의 고소함을 밀도 있게 표현했습니다." },
            { name: "가게 B (무드커피)", price: 14200, desc: "원두 마진을 최소화한 합리적 가격으로, 고소한 너티함과 다크 초콜릿의 쌉싸름한 밸런스가 돋보입니다." },
            { name: "가게 C (카페 빈즈)", price: 14800, desc: "우유와의 조화가 가장 훌륭한 배합으로, 라떼나 플랫화이트로 제조했을 때 브라운 슈가의 단맛이 배가됩니다." }
        ]
    },
    {
        name: "콜롬비아 수프레모 디카페인",
        tag: "Decaf Single",
        icon: '<i class="fa-solid fa-moon" style="color: #ced6e0;"></i>',
        notes: "단맛을 극대화하여 마신 뒤 여운이 길며 자극 없는 부드러움",
        traits: { acidity: "low", body: "medium", caffeine: "decaf" },
        shops: [
            { name: "가게 A (bm로스터스)", price: 17000, desc: "친환경 천연 CO2 공법으로 카페인을 제거하여 디카페인 특유의 잡미 없이 군고구마 같은 깊은 감칠맛을 냅니다." },
            { name: "가게 B (무드커피)", price: 16800, desc: "밤시간에도 안심하고 마실 수 있는 99.9% 카페인 프리 원두로, 마일드한 텍스처와 은은한 보리차 같은 구수함이 특징입니다." },
            { name: "가게 C (카페 빈즈)", price: 17500, desc: "최상급 수프레모 등급만을 고집하여 바디감이 빈약해지기 쉬운 디카페인의 단점을 완벽히 보완한 묵직함이 강점입니다." }
        ]
    },
    {   
        name: "에티오피아 코체르 G1",
        tag: "Single Origin",
        icon: '<i class="fa-solid fa-leaf" style="color: #c2d1c2;"></i>',
        notes: "자스민, 화사한 레몬그라스, 홍차와 같은 실키한 텍스처",
        traits: { acidity: "high", body: "light", caffeine: "regular" },
        shops: [ /* 기존 가게 데이터 */ ]
    },
    {
        name: "과테말라 안티구아 SHB",
        tag: "Single Origin",
        icon: '<i class="fa-solid fa-seedling" style="color: #d1ccc0;"></i>',
        notes: "스모키한 향과 함께 느껴지는 묵직한 바디감과 다크 초콜릿의 달콤함",
        traits: { acidity: "mid", body: "heavy", caffeine: "regular" },
        shops: [
            { name: "가게 A (bm로스터스)", price: 15500, desc: "화산 토양에서 자란 안티구아 특유의 스모키한 매력을 중강배전으로 살렸습니다." },
            { name: "가게 B (무드커피)", price: 15200, desc: "균형 잡힌 산미를 유도하여 데일리로 부드럽게 마시기 편안합니다." }
        ]
    },
    {
        name: "케냐 AA 키린야가",
        tag: "Single Origin",
        icon: '<i class="fa-solid fa-mug-hot" style="color: #ff9f43;"></i>',
        notes: "잘 익은 블랙커런트의 강렬한 산미와 와인 같은 깊은 풍미",
        traits: { acidity: "high", body: "medium", caffeine: "regular" },
        shops: [
            { name: "가게 C (카페 빈즈)", price: 17500, desc: "케냐 AA 등급 중에서도 최상위 랏만을 선정하여 화려한 산미를 극대화했습니다." }
        ]
    },
    {
        name: "디프 브라운 블렌드",
        tag: "Signature Blend",
        icon: '<i class="fa-solid fa-cookie" style="color: #dec8b0;"></i>',
        notes: "다크 초콜릿, 오곡 쿠키의 묵직한 바디감과 뛰어난 단맛",
        traits: { acidity: "low", body: "heavy", caffeine: "regular" },
        shops: [ /* 기존 가게 데이터 */ ]
    },
    {
        name: "브라질 세하도 내추럴",
        tag: "Single Origin",
        icon: '<i class="fa-solid fa-sun" style="color: #ffeaa7;"></i>',
        notes: "견과류의 고소함과 은은한 밀크 초콜릿의 부드러움",
        traits: { acidity: "low", body: "medium", caffeine: "regular" },
        shops: [
            { name: "가게 A (bm로스터스)", price: 13500, desc: "호불호 없는 고소함으로 매일 아침 커피로 가장 추천하는 원두입니다." }
        ]
    },
    {
        name: "콜롬비아 수프레모 디카페인",
        tag: "Decaf Single",
        icon: '<i class="fa-solid fa-moon" style="color: #ced6e0;"></i>',
        notes: "단맛을 극대화하여 마신 뒤 여운이 길며 자극 없는 부드러움",
        traits: { acidity: "low", body: "medium", caffeine: "decaf" },
        shops: [ /* 기존 가게 데이터 */ ]
    }
];

// 글로벌 상태 변수
let selectedBean = beanDB[0]; 
let activeShopIndex = 0; // 선택된 가게 보관
let orderConfig = { weightAdd: 0, quantity: 1 };
let cartTotalQty = 0;

// 제목(로고) 누르면 메인화면으로 이동 및 리셋
function goToMain() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // 활성화되어 있던 창들 정리
    document.getElementById("recommendation-sec").classList.remove("active");
    document.getElementById("result-box").classList.remove("active");
}

// 큐레이션 영역 열고 닫기 토글
function toggleRecommendation() {
    const sec = document.getElementById("recommendation-sec");
    sec.classList.toggle("active");
    if(sec.classList.contains("active")) {
        sec.scrollIntoView({ behavior: 'smooth' });
    }
}

// 큐레이션 라디오 선택 상태 핸들러
function selectCard(element, groupName) {
    const siblingCards = element.parentElement.querySelectorAll('.option-card');
    siblingCards.forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    const input = element.querySelector('input');
    input.checked = true;
}

// 큐레이션 분석 완료 시 호출
function generateRecommendation() {
    const acidVal = document.querySelector('input[name="acidity"]:checked').value;
    const bodyVal = document.querySelector('input[name="body"]:checked').value;
    const caffeineVal = document.querySelector('input[name="caffeine"]:checked').value;

    let matched = beanDB[0];
    let maxMatch = 0;

    beanDB.forEach(bean => {
        let currentScore = 0;
        if(bean.traits.caffeine === caffeineVal) currentScore += 5; 
        if(bean.traits.acidity === acidVal) currentScore += 3;
        if(bean.traits.body === bodyVal) currentScore += 2;

        if(currentScore > maxMatch) {
            maxMatch = currentScore;
            matched = bean;
        }
    });

    selectedBean = matched;
    activeShopIndex = 0; // 기본 첫 번째 가게 선택
    
    document.getElementById("result-type-tag").innerText = "나의 취향 분석 추천 원두";
    renderSalesCard();

    const resBox = document.getElementById("result-box");
    resBox.classList.add("active");
    
    setTimeout(() => {
        resBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// 판매처 가게 클릭 전환 시 작동하는 함수
function selectShop(index) {
    activeShopIndex = index;
    
    // 버튼 UI 클래스 업데이트
    const shopBtns = document.querySelectorAll(".shop-select-btn");
    shopBtns.forEach((btn, idx) => {
        if(idx === index) btn.classList.add("active");
        else btn.classList.remove("active");
    });
    
    // 설명 내용 업데이트
    document.getElementById("shop-desc-display").innerText = selectedBean.shops[index].desc;
    
    // 금액 재산출
    calculatePrice();
}

// 판매창 정보 및 동적 가게 리스트 생성
function renderSalesCard() {
    document.getElementById("rec-visual-name").innerText = selectedBean.name;
    document.getElementById("rec-tag").innerText = selectedBean.tag;
    document.getElementById("rec-title").innerText = selectedBean.name;
    document.getElementById("rec-notes").innerText = selectedBean.notes;
    document.getElementById("rec-visual-icon").innerHTML = selectedBean.icon;
    
    // 가게 선택 버튼 리스트 만들기
    const listContainer = document.getElementById("shop-selector-list");
    listContainer.innerHTML = "";
    
    selectedBean.shops.forEach((shop, idx) => {
        const btn = document.createElement("button");
        btn.className = `shop-select-btn ${idx === activeShopIndex ? 'active' : ''}`;
        btn.onclick = () => selectShop(idx);
        btn.innerHTML = `
            <span class="s-name"><i class="fa-solid fa-store"></i> ${shop.name.split(' ')[0]} <small>${shop.name.includes('(')? shop.name.split(' ')[1] : ''}</small></span>
            <span class="s-price">${shop.price.toLocaleString()}원</span>
        `;
        listContainer.appendChild(btn);
    });

    // 현재 지정된 가게 설명 바인딩
    document.getElementById("shop-desc-display").innerText = selectedBean.shops[activeShopIndex].desc;

    // 옵션 UI 세팅 초기화
    orderConfig.weightAdd = 0;
    orderConfig.quantity = 1;
    document.getElementById("quantity-val").innerText = "1";

    document.querySelectorAll("#weight-selector .opt-btn").forEach((btn, idx) => {
        if(idx === 0) btn.classList.add("active");
        else btn.classList.remove("active");
    });

    document.querySelectorAll("#grind-selector .opt-btn").forEach((btn, idx) => {
        if(idx === 0) btn.classList.add("active");
        else btn.classList.remove("active");
    });

    calculatePrice();
}

function selectOption(element, type, val, extraPrice = 0) {
    const parent = element.parentElement;
    parent.querySelectorAll('.opt-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if(type === 'weight') {
        orderConfig.weightAdd = extraPrice;
    }
    calculatePrice();
}

function changeQty(diff) {
    let nextQty = orderConfig.quantity + diff;
    if(nextQty < 1) nextQty = 1;
    orderConfig.quantity = nextQty;
    document.getElementById("quantity-val").innerText = nextQty;
    calculatePrice();
}

function calculatePrice() {
    // 선택된 특정한 가게의 베이스 가격을 가져옴
    const targetBasePrice = selectedBean.shops[activeShopIndex].price;
    const total = (targetBasePrice + orderConfig.weightAdd) * orderConfig.quantity;
    document.getElementById("total-price-display").innerText = total.toLocaleString() + "원";
}

function addToCart() {
    cartTotalQty += orderConfig.quantity;
    document.getElementById("cart-qty").innerText = cartTotalQty;
    alert(`${selectedBean.name} [${selectedBean.shops[activeShopIndex].name.split(' ')[0]}] (${orderConfig.quantity}개) 제품이 장바구니에 담겼습니다.`);
}

function handleCheckout() {
    const targetBasePrice = selectedBean.shops[activeShopIndex].price;
    const total = (targetBasePrice + orderConfig.weightAdd) * orderConfig.quantity;
    alert(`[주문 완료] ${selectedBean.name} (${selectedBean.shops[activeShopIndex].name.split(' ')[0]}) \n수량: ${orderConfig.quantity}개 \n합계 금액: ${total.toLocaleString()}원 주문이 완료되었습니다.`);
}

function showSection(sectionId) {
    // 모든 섹션 숨기기
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    
    // 선택한 섹션 보여주기
    document.getElementById(sectionId).style.display = 'block';
}

// 섹션 노출 제어 함수
function showSection(target) {
    // 1. 모든 섹션을 숨김
    document.getElementById('shop-section').style.display = 'none';
    document.getElementById('brand-story').style.display = 'none';
    document.getElementById('recommendation-sec').style.display = 'none';

    // 2. 타겟 섹션만 보여줌
    if(target === 'shop') {
        document.getElementById('shop-section').style.display = 'block';
    } else if(target === 'brand') {
        document.getElementById('brand-story').style.display = 'block';
    } else if(target === 'curator') {
        document.getElementById('recommendation-sec').style.display = 'block';
    }
}

// 메인 화면 하단 스페셜티 원두 컬렉션을 클릭했을 때 작동하는 함수
function forceSelect(acid, body, caf) {
    let matched = beanDB.find(bean => bean.traits.acidity === acid && bean.traits.body === body && bean.traits.caffeine === caf);
    if(!matched) {
        matched = beanDB.find(bean => bean.traits.acidity === acid || bean.traits.caffeine === caf);
    }

    if (matched) {
        selectedBean = matched;
    }

    activeShopIndex = 0; // 기본 첫 가게 세팅

    // 큐레이션 설문창(recommendation-sec)을 거치지 않고 활성화하지 않음!
    // 오직 결과창 상세정보 바운더리만 노출시킴
    document.getElementById("recommendation-sec").classList.remove("active");
    
    document.getElementById("result-type-tag").innerText = "선택하신 상품 상세 정보";
    renderSalesCard();

    const resBox = document.getElementById("result-box");
    resBox.classList.add("active");

    setTimeout(() => {
        resBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}
