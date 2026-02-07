document.addEventListener('DOMContentLoaded', () => {
    const menuImage = document.getElementById('menu-image');
    const menuName = document.getElementById('menu-name');
    const menuDescription = document.getElementById('menu-description');
    const recommendBtn = document.getElementById('recommend-btn');

    const dinnerMenus = [
        {
            name: "스테이크 (Steak)",
            description: "육즙 가득한 스테이크에 구운 채소를 곁들인 고급스러운 저녁 식사.",
            imageKeyword: "steak"
        },
        {
            name: "파스타 (Pasta)",
            description: "신선한 토마토 소스와 바질로 맛을 낸 이탈리아 파스타.",
            imageKeyword: "pasta"
        },
        {
            name: "초밥 (Sushi)",
            description: "다양한 신선한 해산물로 만든 일본 전통 초밥 세트.",
            imageKeyword: "sushi"
        },
        {
            name: "한정식 (Korean Full Course Meal)",
            description: "다채로운 반찬과 메인 요리로 구성된 푸짐한 한국 전통 한정식.",
            imageKeyword: "korean food"
        },
        {
            name: "타코 (Taco)",
            description: "매콤한 고기와 신선한 채소가 어우러진 멕시칸 타코.",
            imageKeyword: "taco"
        },
        {
            name: "피자 (Pizza)",
            description: "쭉 늘어나는 치즈와 토핑이 일품인 따끈따끈한 피자.",
            imageKeyword: "pizza"
        },
        {
            name: "샐러드 (Salad)",
            description: "신선한 채소와 닭가슴살, 드레싱이 어우러진 건강한 샐러드.",
            imageKeyword: "salad"
        }
    ];

    function getRandomMenu() {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        return dinnerMenus[randomIndex];
    }

    function displayMenu() {
        const menu = getRandomMenu();
        menuName.textContent = menu.name;
        menuDescription.textContent = menu.description;
        // Using Picsum Photos for random images with a specific keyword.
        // The image will be different each time because of the random size and keyword.
        menuImage.src = `https://source.unsplash.com/random/800x600/?${menu.imageKeyword},food`;
        menuImage.alt = menu.name;
    }

    // Display a menu on initial load
    displayMenu();

    // Add event listener to the button
    recommendBtn.addEventListener('click', displayMenu);
});