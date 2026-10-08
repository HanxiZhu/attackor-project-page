const models = {
  'ORLM-LLaMA-3-8B': {clean:59.21, attacked:39.85, drop:32.69},
  'Claude-Sonnet-4-6': {clean:84.40, attacked:66.40, drop:21.33},
  'Gemini-3-Flash': {clean:57.36, attacked:44.33, drop:22.71},
  'DeepSeek-V3.2': {clean:44.73, attacked:21.79, drop:51.29},
  'Kimi-k2.5': {clean:34.34, attacked:22.24, drop:35.24},
  'Qwen3-Max': {clean:12.45, attacked:3.76, drop:69.78}
};
const select = document.getElementById('model-select');
function updateChart(){
  const m=models[select.value];
  document.getElementById('clean-bar').style.width=m.clean+'%';
  document.getElementById('attacked-bar').style.width=m.attacked+'%';
  document.getElementById('clean-value').textContent=m.clean.toFixed(2);
  document.getElementById('attacked-value').textContent=m.attacked.toFixed(2);
  document.getElementById('model-note').textContent=(document.body.classList.contains('zh')?'相对下降：':'Relative drop: ')+m.drop.toFixed(2)+'%';
}
select.addEventListener('change',updateChart);
const languageButton=document.getElementById('language-toggle');
function setLanguage(lang){
  const zh=lang==='zh';
  document.documentElement.lang=zh?'zh-CN':'en';
  document.body.classList.toggle('zh',zh);
  document.querySelectorAll('[data-en][data-zh]').forEach(el=>{el.textContent=el.dataset[lang]});
  languageButton.textContent=zh?'EN':'中文';
  languageButton.setAttribute('aria-label',zh?'Switch to English':'切换到中文');
  localStorage.setItem('attackor-language',lang);
  updateChart();
}
languageButton.addEventListener('click',()=>setLanguage(document.body.classList.contains('zh')?'en':'zh'));
setLanguage(localStorage.getItem('attackor-language')==='zh'?'zh':'en');
