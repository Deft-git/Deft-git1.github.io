//Questions
var dbt = '心理测试--国际标准版';
//fontstyle
var fontstyle = eval([{ "fontSize": "16px", "textAlign": "center", "color": "#000" }]);
var ylist = eval([{ "threshold": "35", "img": "", "title": "毒蛇型逗比", "desc": "刀子嘴，豆腐心。人艰不拆不是你的性格，喜大普奔尽显真我风采，生活中的你凭借自己洞察世间百态的心智和秒杀一切话题的嘴吧，将调戏人类发挥的淋漓尽致，受到万千粉丝追捧，你就是你，不是在黑别人就是在准备黑别人", "sharetitle": "在逗比测试中我获得“毒蛇型逗比”，说我不是在黑别人就是在准备黑别人。快来测测你是那种逗比？" }, { "threshold": "30", "img": "", "title": "闷骚型逗比", "desc": "外表冷静，内心狂热。你不说，不代表心里没想过，你就静静坐在哪里看着大千世界云起云落，其实内心早已奔过千万头草泥马，但是你就是不说。嗯，你就继续憋着吧", "sharetitle": "在逗比测试中我获得“闷骚型逗比”，说我外表冷静其实内心早已奔过千万头草泥马。快来测测你是那种逗比？" }, { "threshold": "25", "img": "", "title": "炸裂型逗比", "desc": "脑袋不大，笑点不高！哈哈哈。。。。。你就是这么开心的一个人，因为你，你身边的人也都是开心的人，哈哈哈哈哈哈哈！", "sharetitle": "在逗比测试中我获得“炸裂型逗比”，说我脑袋不大，笑点不高！整天哈哈哈。。。。快来测测你是那种逗比？" }, { "threshold": "20", "img": "", "title": "高冷型逗比", "desc": "高贵且内敛，智慧且冷艳！你高贵冷艳的幽默气质总是能瞬间冷却酒肉损友间低级无趣的毒蛇吐槽，轻轻松松让众人皮笑肉笑；分分钟让众生敬仰膜拜。这就是你，一个脱离低级趣味的人。", "sharetitle": "在逗比测试中我获得“高冷型逗比”，说我高贵且内敛，智慧且冷艳，是一个脱离低级趣味的人。快来测测你是那种逗比？" }, { "threshold": "15", "img": "", "title": "蠢萌型逗比", "desc": "天然呆，自然萌。生活中的你虽然时常反应迟钝、神经大条，老虎老鼠傻傻分不清楚，做出一些常人难以想象的事情。然而在朋友眼中的你永远是傻傻的憨憨的带给大家无尽的欢声笑语，感觉自己萌萌哒卡哇伊内~~", "sharetitle": "在逗比测试中我获得“蠢萌型逗比”，说我天然呆，自然萌，老虎老鼠傻傻分不清楚。快来测测你是那种逗比？" }, { "threshold": "10", "img": "", "title": "透明型逗比", "desc": "明明你已经很努力的搞笑来提升存在感了，可是大家报数时还是没算你。别叹气，别放弃，相信世界总会有奇迹，小透明也能人气高到飞起。加油吧，么么哒！", "sharetitle": "在逗比测试中我获得“透明型逗比”，说我明明已经很努力的搞笑来提升存在感了，可是大家报数时还是没算我。快来测测你是那种逗比？" }]);
var total = xlist.length; // 总题数
var finish = 0; // 已完成题数
var answer_right = 0; // 答对题数
var isweight = xlist[0].weight;
var targetScroe = 0;
var scorerecord = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var process = 1 / total;
var i = 1;
let score = 0  // 分数
function startTest() {
  setTimeout(function () {
    addClass(document.getElementById('main'), 'animation-next');
    document.getElementById('start').style.display = 'none';
    document.getElementById('wenti').style.display = 'block';
  }, 500)
}
function creatanserElement(anser) {
  var vel = 1;
  var xieti = '';
  for (index in anser) {
    console.log(index)
    xieti += "<div id='ti" + index + "'" + " vel='" + index + "'" + " num='" + index + ".'" + " class='t-s' onclick='select(this);'><span></span></div>";
  }
  //console.log(xieti);
  document.getElementById('selections').innerHTML = xieti;
}
// 设置题目
function setquestion(i) {
  var vel = 1;
  var xieti = '';
  var xieti1 = '';
  for (index in xlist[i].answer) {
    // console.log(index)

    if (xlist[i].answer[index].img != "") {
      xieti += "<div id='ti" + index + "'" + " vel='" + index + "'" + " num='" + index + ".'" + " class='t-s' onclick='select(this);'>" + "<img id='img" + index + "'" + "width='10%" + "'" + "></div>";
    }
    else {
      xieti += "<div id='ti" + index + "'" + " vel='" + index + "'" + " num='" + index + ".'" + " class='t-s' onclick='select(this);'><span></span></div>";
    }
  }
  document.getElementById('selections').innerHTML = xieti;


  if (xlist[i].kkimg != "") {
    xieti1 = "<img id='" + "img8'>";
    document.getElementById('question').innerHTML = xieti1;
    document.getElementById('img8').setAttribute('src', xlist[i].kkimg);
  }
  else {
    addClass(document.getElementById('question'), 'question-only');
    document.getElementById('question').innerHTML = xlist[i].question;
  }
  document.getElementById('ti0').style.display = 'none';
  var num = 1;
  for (anser in xlist[i].answer) {
    if (xlist[i].answer[anser].img != "") {
      document.getElementById('img' + anser).setAttribute('src', xlist[i].answer[anser].img);
    }
    else {
      document.getElementById('ti' + anser).innerHTML = xlist[i].answer[anser].title; //换题
    }
    document.getElementById('ti' + anser).setAttribute('vel', num);
    targetScroe += num;
    num += 1;
  }

}
// 判断选择那个选项，分数统计
function paduan(selected) {
  let SelectInndex;
  let selectItem;
  selected = parseInt(selected);
  let readySelect = xlist[finish - 1]
  var level = '';
  /* 这里 selected表明选中的序号 */
  // console.log('selected' + selected)
  // console.log('finish:' + finish)
  if(selected==1){
    SelectInndex = 'a'
  }
  if (selected == 2) {
    SelectInndex = 'b'
  }
  if (selected == 3) {
    SelectInndex = 'c'
  }
  if (selected == 4) {
    SelectInndex = 'd'
  }
  if (selected == 5) {
    SelectInndex = 'e'
  }
  if (selected == 6) {
    SelectInndex = 'f'
  }
  selectItem = readySelect.answer[SelectInndex];
  console.log(SelectInndex);
  console.log(selectItem);
  // 分数统计
  score += selectItem.score
  if (total > finish) {
    setquestion(finish);
  }
  if (total == finish){
    shubmitShow()
  }
}
// 点击选择
function select(dom) {
  if(finish<total){
    finish=finish +1
    console.log(finish);
    removeClass(dom, 'active');
    removeClass(document.getElementById('main'), 'animation-next');
    addClass(dom, 'active');
      setTimeout(function () {
        paduan(dom.getAttribute('vel'));
        updateProcess();
      }, 500)
  }
}
function initGameFont() {
  for (stye in fontstyle[0]) {
    document.getElementById('ti').style[stye] = fontstyle[0][stye];
  }
}
// 进度条
function updateProcess() {
  process = 1 / total * i * 100;
  if (i >= total) i = total;
  if (process >= 100) process = 100;
  document.getElementById('precent').style.width = process + '%';
  document.getElementById('pro-label-span').innerHTML = i + '/' + total;
  i++;
}
function adpthead() {
  var img = document.getElementById('head-img');
  var imgStyleHeight = img.height;
  var targetHeight = 100;
  if (imgStyleHeight > targetHeight) {
    img.style.marginTop = -(imgStyleHeight - targetHeight) / 2 + 'px';
    img.style.marginBottom = -(imgStyleHeight - targetHeight) / 2 + 'px';
    img.maxHeight = 100 + 'px';
    img.overflow = 'hidden';
  }
}
// c初始化
function initGame() {
  if ("".trim() == "") {
    document.getElementById('start').style.display = 'none';
    document.getElementById('wenti').style.display = 'block';
  }
  else {
    document.getElementById('home-desc').innerHTML = '';
  }
  document.getElementById('dbt').innerHTML = dbt;
  document.title = dbt;
  setquestion(0); // 初始化
  initGameFont();
  updateProcess();
}
initGame();
// 提交答案显示
function shubmitShow(){
  // console.log('显示');
  let obj = document.querySelector('.submit')
  obj.style.display = 'block'
  obj.addEventListener('click',() =>{
    document.querySelector('#ti').style.display = 'none'
    document.querySelector('#question').style.display = 'none'
    document.querySelector('.scoreBox').style.display = 'block'
    document.querySelector('.score').innerHTML = score
  })
}