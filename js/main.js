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
              <div onclick="showMountainInfo('加里山', '山林簡介：加里山位於台灣苗栗縣南庄鄉，標高2220公尺，登山步道聯結南庄蓬萊、風美及鹿場，沿途森林樣貌為柳杉人工造林及闊葉林。沿途可見伐木時期的台車鐵軌，能見證當年興盛的林業，後半段的路有拉繩、攀登地形。小百岳加里山為中北台名山，山頂一等三角點，視野遼闊，可遠眺氣勢磅礡的雪山聖稜線和鄰近的鹿場大山。盛產台灣特有一葉蘭，每年3、4月總吸引許多登山客尋芳賞花。')">加里山</div>
            </div>
          </div>
          <div class="category">
            <div class="category-title" onclick="toggleCategory('cat3')">海拔3000以上 [+]</div>
            <div class="subcategory" id="cat3" style="display:none;">
              <div onclick="showMountainInfo('玉山主峰', '山林簡介：玉山主峰位於台灣的中心位置，海拔3952公尺，為台灣群山之首，百岳排名第一，也是東北亞的最高峰。主峰四周有東、南、西、北峰環繞，外圍還有前峰、小南山、南玉山、東小南山、鹿山與北北峰遙相呼應，宛如眾星拱月般，襯托出主峰的王者之尊，壯偉雄奇的山容、絕佳的展望和絢麗的日出景觀')">玉山</div>
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

// 確認後進入行前訓練
function confirmMountain() {
  setBackground('bg_training.jpg');  // 行前訓練背景圖

  document.getElementById('game').innerHTML = `
    <div class="training-scene">
      <h1>行前訓練</h1>
      <p>（這裡之後可以設計行前準備的內容）</p>
    </div>
  `;
}

function showEquipmentSelection() {
  setBackground('images/mountain2.jpg');  // 你可以換一張背景圖 or 暫時用舊的

  document.getElementById('game').innerHTML = `
    <div class="scene-box">
      <h2>登山裝備選擇</h2>
      <div class="selection-container">
        <div class="selection-list">
          <ul>
            <li onclick="showEquipmentDetail('登山鞋')">登山鞋</li>
            <li onclick="showEquipmentDetail('雨衣')">雨衣</li>
            <li onclick="showEquipmentDetail('頭燈')">頭燈</li>
          </ul>
        </div>
        <div class="selection-detail" id="equipment-detail">
          請選擇左邊的裝備查看說明
        </div>
      </div>
      <button onclick="proceedToNextStep()">確認</button>
    </div>
  `;
}

function showEquipmentDetail(item) {
  let detailText = '';

  if (item === '登山鞋') {
    detailText = '登山鞋提供良好抓地力與防滑性，適合崎嶇地形。';
  } else if (item === '雨衣') {
    detailText = '雨衣防風防水，避免突如其來的降雨讓身體失溫。';
  } else if (item === '頭燈') {
    detailText = '頭燈方便夜間照明，雙手仍可自由行動，安全性提升。';
  }

  document.getElementById('equipment-detail').innerHTML = `
    <h3>${item}</h3>
    <p>${detailText}</p>
  `;
}

function proceedToNextStep() {
  alert('登山裝備選擇完成，進入下一步...');
  // 之後可以改呼叫下一個畫面函式
}


