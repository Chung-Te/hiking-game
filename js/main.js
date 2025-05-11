// 啟動遊戲 
window.onload = function() {
  showStartScene();
};

function setBackground(imageName) {
  document.body.style.backgroundImage = `url('assets/${imageName}')`;
}

function showStartScene() { 
  setBackground('images/mountain1.jpg');  // 背景圖
  
  document.getElementById('game').innerHTML = `
    <div class="start-scene scene-box">
      <h1>登山安全知識遊戲</h1>
      <button onclick="showMountainSelection()">開始遊戲</button>
    </div>
  `;
}

function showMountainSelection() {
  setBackground('images/mountain2.jpg');  // 山林選擇背景圖

  document.getElementById('game').innerHTML = `
    <div class="mountain-scene-container">
      <div class="mountain-scene">
        <div class="left-panel">
          <div class="category">
            <div class="category-title" onclick="toggleCategory('cat1')">海拔2000公尺以下 [+]</div>
            <div class="subcategory" id="cat1" style="display:none;">
              <div onclick="showMountainInfo('小山A', '山林簡介：容易親近，適合新手。')">小山A</div>
            </div>
          </div>
          <div class="category">
            <div class="category-title" onclick="toggleCategory('cat2')">海拔2000~3000公尺 [+]</div>
            <div class="subcategory" id="cat2" style="display:none;">
              <div onclick="showMountainInfo('加里山', '山林簡介：加里山位於台灣苗栗縣南庄鄉，標高2220公尺，登山步道聯結南庄蓬萊、風美及鹿場，沿途森林樣貌為柳杉人工造林及闊葉林。')">加里山</div>
            </div>
          </div>
          <div class="category">
            <div class="category-title" onclick="toggleCategory('cat3')">海拔3000以上 [+]</div>
            <div class="subcategory" id="cat3" style="display:none;">
              <div onclick="showMountainInfo('玉山主峰', '山林簡介：玉山主峰位於台灣的中心位置，海拔3952公尺，為台灣群山之首，百岳排名第一，東北亞的最高峰。')">玉山</div>
            </div>
          </div>
        </div>
        <div class="right-panel" id="mountain-info">
          <p>請選擇左邊的山！</p>
        </div>
      </div>
    </div>
  `;
}

// 控制展開/收合
function toggleCategory(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

// 顯示右邊的山資訊
function showMountainInfo(name, description) {
  document.getElementById('mountain-info').innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
    <button onclick="confirmMountain()">確認</button>
  `;
}

// 確認後直接進入裝備選擇頁面
function confirmMountain() {
  showEquipmentSelection();
}

let selectedEquipment = [];  // 存已選裝備

function showEquipmentSelection() {
  selectedEquipment = []; // 每次進入重設

  setBackground('images/mountain2.jpg');

  document.getElementById('game').innerHTML = `
    <div class="mountain-scene-container" style="width: 1000px;">
      <div class="mountain-scene" style="width: 1000px; height: 400px;">
        <div class="left-panel">
          <h3>裝備清單</h3>
          <div class="subcategory" style="display:block;">
            <div onclick="showEquipmentDetail('登山鞋')">登山鞋</div>
            <div onclick="showEquipmentDetail('雨衣')">雨衣</div>
            <div onclick="showEquipmentDetail('頭燈')">頭燈</div>
            <div onclick="showEquipmentDetail('瓦斯爐')">瓦斯爐</div>
            <div onclick="showEquipmentDetail('乾糧與食物')">乾糧與食物</div>
          </div>
        </div>

        <div class="right-panel" id="equipment-info">
          <p>請選擇左邊的裝備！</p>
        </div>

        <div class="selected-panel" id="selected-equipment-panel">
          <h4>已選擇</h4>
          <ul id="selected-list"></ul>
        </div>
      </div>

      <div style="width:100%; text-align:right; margin-top:10px;">
        <button onclick="confirmEquipmentSelection()">確認</button>
      </div>
    </div>
  `;
}

function showEquipmentDetail(item) {
  let detailText = '';
  let imageSrc = '';

  if (item === '登山鞋') {
    detailText = '登山鞋提供良好抓地力與防滑性，適合崎嶇地形。';
    imageSrc = 'images/gear/mountain_shoes.jpg';
  } else if (item === '雨衣') {
    detailText = '雨衣防風防水，避免突如其來的降雨讓身體失溫。';
    imageSrc = 'images/gear/raincoat.jpg';
  } else if (item === '頭燈') {
    detailText = '頭燈方便夜間照明，雙手仍可自由行動，安全性提升。';
    imageSrc = 'images/gear/headlamp.jpg';
  } else if (item === '瓦斯爐') {
    detailText = '瓦斯爐可用來烹煮食物，增加登山過程中的能量補充。';
    imageSrc = 'images/gear/gas_stove.jpg';
  } else if (item === '乾糧與食物') {
    detailText = '乾糧與食物是登山必備，能提供登山所需的能量。';
    imageSrc = 'images/gear/dry_food.jpg';
  }

  document.getElementById('equipment-info').innerHTML = `
    <h3>${item}</h3>
    <img src="${imageSrc}" alt="${item}" style="width:200px; height:auto;">
    <p>${detailText}</p>
    <button onclick="addEquipment('${item}')">加入</button>
  `;
}

function addEquipment(item) {
  if (!selectedEquipment.includes(item)) {
    selectedEquipment.push(item);
    updateSelectedList();
  } else {
    alert(item + ' 已經加入過了！');
  }
}

function removeEquipment(item) {
  selectedEquipment = selectedEquipment.filter(eq => eq !== item);
  updateSelectedList();
}

function updateSelectedList() {
  const listEl = document.getElementById('selected-list');
  listEl.innerHTML = '';
  selectedEquipment.forEach(eq => {
    listEl.innerHTML += `<li onclick="removeEquipment('${eq}')" title="點擊移除">${eq} ❌</li>`;
  });
}

function confirmEquipmentSelection() {
  if (selectedEquipment.length === 0) {
    alert('請至少選擇一項裝備！');
    return;
  }

  alert('裝備選擇完成，進入下一步...');
  // 呼叫下一個畫面函式
  // nextPageFunction();
}




