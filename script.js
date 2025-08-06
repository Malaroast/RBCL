function showRule(category) {
  const content = document.getElementById("rule-content");
  let html = '';

  switch (category) {
    case 'game':
      html = `
        <h3>⚾ 경기 규칙</h3>
        <ul>
          <li>모든 경기는 9이닝제로 진행됩니다.</li>
          <li>연장전은 3이닝까지 허용됩니다.</li>
          <li>비디오 판독 요청은 경기당 1회 가능합니다.</li>
        </ul>
      `;
      break;
    case 'penalty':
      html = `
        <h3>🚨 제재 규정</h3>
        <ul>
          <li>비신사적 언행: 1~3경기 출장 정지</li>
          <li>고의적 태업: 최대 시즌 출전 정지</li>
        </ul>
      `;
      break;
    case 'player':
      html = `
        <h3>👤 선수 행동 지침</h3>
        <ul>
          <li>경기 중 욕설 및 도발 금지</li>
          <li>상대방에 대한 예의와 존중을 지켜야 합니다.</li>
        </ul>
      `;
      break;
  }

  content.innerHTML = html;
  content.style.display = 'block';
}
