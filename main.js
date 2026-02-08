document.addEventListener('DOMContentLoaded', () => {
    const menuImage = document.getElementById('menu-image');
    const menuName = document.getElementById('menu-name');
    const menuDescription = document.getElementById('menu-description');
    const recommendBtn = document.getElementById('recommend-btn');
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;
    const themeText = document.querySelector('.theme-switch-wrapper em');

    // Theme switching logic
    function setTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeText.textContent = 'Disable Dark Mode!';
        } else {
            body.classList.remove('dark-mode');
            themeText.textContent = 'Enable Dark Mode!';
        }
    }

    function toggleTheme() {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Load saved theme from localStorage or default to system preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
        const isDarkMode = savedTheme === 'true';
        themeToggle.checked = isDarkMode;
        setTheme(isDarkMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Default to system dark mode if no preference saved
        themeToggle.checked = true;
        setTheme(true);
    }

    themeToggle.addEventListener('change', toggleTheme);

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
        menuImage.src = `https://loremflickr.com/800/600/${menu.imageKeyword},food?cache=${new Date().getTime()}`;
        menuImage.alt = menu.name;

        // Optional: Add error handling for image loading
        menuImage.onerror = () => {
            menuImage.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'; // Fallback image
            menuImage.alt = '이미지를 불러올 수 없습니다.';
        };
    }

    // Display a menu on initial load
    displayMenu();

    // Add event listener to the button
    recommendBtn.addEventListener('click', displayMenu);
});