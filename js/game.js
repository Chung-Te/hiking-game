const mountains = {
    pineHill: {
        name: "松林丘",
        altitude: "海拔 1800 公尺",
        description: "松林丘是一座適合初學者的低海拔山峰，覆蓋著茂密的松樹林。步道平緩，適合家庭出遊。需注意攜帶足夠飲用水，並穿著防滑鞋以應對偶爾濕滑的路面。"
    },
    cloudPeak: {
        name: "雲峰",
        altitude: "海拔 2800 公尺",
        description: "雲峰以其雲霧繚繞的山頂而聞名，景色壯麗。中等難度的步道需要一定體力，建議攜帶保暖衣物，因山頂氣溫較低。注意檢查天氣預報，避免雨天登山。"
    },
    starRidge: {
        name: "星脊",
        altitude: "海拔 3500 公尺",
        description: "星脊是高海拔挑戰，山頂可俯瞰星空，極具視覺震撼。攀登需專業裝備（如登山杖和繩索），並建議結伴而行。務必攜帶高熱量食物以補充體力。"
    }
};

function startGame() {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('selection-screen').classList.add('active');
}

function toggleCategory(categoryId) {
    const subOptions = document.getElementById(categoryId);
    subOptions.classList.toggle('hidden');
}

function selectMountain(mountainId) {
    const mountain = mountains[mountainId];
    document.getElementById('mountain-name').textContent = `${mountain.name} (${mountain.altitude})`;
    document.getElementById('mountain-description').textContent = mountain.description;
}