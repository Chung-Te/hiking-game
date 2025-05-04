function makeChoice(action) {
    const scene = document.getElementById('scene');
    if (action === 'climb') {
        scene.textContent = '你奮力向上攀爬，到達一個平台。';
        // 更新按鈕或場景
    } else if (action === 'rest') {
        scene.textContent = '你休息片刻，恢復體力。';
    }
}