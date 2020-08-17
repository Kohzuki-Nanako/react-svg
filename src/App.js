import React,{useState} from "react";

const App = () => {
  return (<div>
    <section class="hero is-medium is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">人手不足からみる日本の現状</h1>
          <h2 class="subtitle">生産性が低い日本</h2>
        </div>
      </div>
    </section>
    <div className="container">
    <div class="tile is-ancestor">
    <div class="tile is-5 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">One</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
      <div class="tile is-child box">
        <p class="title">Two</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        
        <Select />
        <Graph4 />
      </div>
    </div>
    <div class="tile is-7 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Three</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
        <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
        <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        <Graph />
      </div>
    
      <div class="tile is-child box">
        <p class="title">Three</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        
      </div>
    </div>
  </div>   
  </div>
  </div>
  );
};

const Select = () => {
  const [d,setD] = useState([])
  const change = (event) => {
    setD(event.target.value)
    if(event.target.value === 1){
      setD(<Graph1 />)
    }else if(event.target.value === 2){
      setD(<Graph2 />)
    } else if(event.target.value === 3){
      setD(<Graph3 />)
    } else {
      setD(<Graph4 />)
    }
  }
  return ( 
   <form> 
    <div class="select">
     <select value = "0" onchange={change}>
        <option value="0">----</option>
        <option value="1">インターネット普及率</option>
        <option value="2">電子政府率の国際比較</option>
        <option value="3">行政のオンライン化状況</option>
        <option value="4">マイナンバーカード普及率</option>
     </select>
    </div>  
   </form>  
  )
}


const Graph = () => {
  
    const width = 745
    const height = 900
    var pre = height
    const data = [
      {job: "農業、林業", people: 107, ratio: 51.0},
      {job: "建設業", people: 78, ratio: 15.5},
      {job: "製造業", people: 94, ratio: 8.9},
      {job: "情報通信業", people: 5, ratio: 2.3},
      {job: "運輸業、郵便業", people: 39, ratio: 11.4},
      {job: "卸売業、小売業", people: 127, ratio: 11.8},
      {job: "金融業、保険業", people: 7, ratio: 4.3},
      {job: "不動産業、物品賃貸業", people: 33, ratio: 25.4},
      {job: "学術研究、専門・技術サービス業", people: 30, ratio: 12.6},
      {job: "宿泊業、飲食サービス業", people: 61, ratio: 14.7},
      {job: "生活関連サービス業、娯楽業", people: 43, ratio: 18.2},
      {job: "学術、学習支援業", people: 26, ratio: 8.1},
      {job: "医療、福祉", people: 80, ratio: 9.6},
      {job: "サービス業（他に分類されないもの）", people: 98, ratio: 22.0},
      {job: "公務（他に分類されるものを除く）", people: 8, ratio: 3.4},
    ]
    const barHeight = 20;
    return (
    
    <svg width={width} height={height}>
      <g transform="translate(50,0)">
        <text x="0" y="250" textAnchor="end">(万人)</text>
        <text x="-13" y={height/2+145} textAnchor="start">0</text>
        <line x1="0" y1="30" x2="0" y2={height/2+150} stroke="black" />
        <line x1={width-120} y1="30" x2={width-120} y2={height/2+150} stroke="black" />
        <line x1="0" y1={height/2+150} x2={width-120} y2={height/2+150} stroke="black" />
        
        <line x1="-15" y1="275" x2="0" y2="275" stroke="black" /><text x="-52" y="275" textAnchor="start" font-size="13">1000</text>
        <line x1="-15" y1="355" x2="0" y2="355" stroke="black" /><text x="-45" y="355" textAnchor="start" font-size="13">750</text>
        <line x1="-15" y1="435" x2="0" y2="435" stroke="black" /><text x="-45" y="435" textAnchor="start" font-size="13">500</text>
        <line x1="-15" y1="515" x2="0" y2="515" stroke="black" /><text x="-45" y="515" textAnchor="start" font-size="13">250</text>

        <line x1={width-120} y1="30" x2={width-105} y2="30" stroke="black" /><text x={width-105}  y="33" textAnchor="start" font-size="13">60</text>
        <line x1={width-120} y1="90" x2={width-105} y2="90" stroke="black" /><text x={width-105}  y="93" textAnchor="start" font-size="13">50</text>
        <line x1={width-120} y1="150" x2={width-105} y2="150" stroke="black" /><text x={width-105}  y="153"textAnchor="start" font-size="13">40</text>
        <line x1={width-120} y1="210" x2={width-105} y2="210" stroke="black" /><text x={width-105}  y="213" textAnchor="start" font-size="13">30</text>
        <line x1={width-120} y1="270" x2={width-105} y2="270" stroke="black" /><text x={width-105}  y="273" textAnchor="start" font-size="13">20</text>
        <line x1={width-120} y1="330" x2={width-105} y2="330" stroke="black" /><text x={width-105}  y="333" textAnchor="start" font-size="13">10</text>
        <line x1={width-120} y1="390" x2={width-105} y2="390" stroke="black" /><text x={width-105}  y="393" textAnchor="start" font-size="13">0</text>
        <text x={width-117} y="440" textAnchor="start">(%)</text>
        
        {data.map((item, i) => {
          return (
            <g key={item.job} transform={`translate(${40 * (i + 1)},0)`}>
              <rect
                x={-barHeight}
                y={599-((item.people*100/item.ratio)*32.5/100)}
                width={barHeight}
                height={((item.people*100/item.ratio)*32.5/100)}
                fill={"pink"}
              />
              <rect
                x={-barHeight}
                y={599-((item.people)*32.5/100)}
                width={barHeight}
                height={((item.people)*32.5/100)}
                fill={"lightblue"}
              />
              <text x="-15" y={height/2+150} textAnchor="start"　writing-mode="tb">
                {item.job}
              </text>
              </g>             
          );
        })}

        {data.map((item, i) => {
          pre = data[Math.max(0, i - 1)]["ratio"]
          return (
            <g transform="translate(30,0)">
              <line x1 = {Math.max(0, 40 * (i - 1))} y1 = {393-pre*6} x2 = {40*i} y2 = {393-item.ratio*6} stroke="orange"/>
              <ellipse
                        cx = {40*i}
                        cy = {393-item.ratio*6}
                        rx = "3"
                        ry = "3"
                        fill = "orange"
              />
              <text x={40*i} y={375-item.ratio*6} textAnchor="middle">{item.ratio}</text>

            </g>
          );
        })}
      </g>
    </svg>
  );
};

const Graph1 = () => {
  
  
  const width = 600
  const height = 800
  
  const dataEGDI = [
    {country: "韓国",         points14: 0.9462, points16: 0.8915, points18: 0.9010, points20: 0.9560, col: "lavender"},
    {country: "オーストラリア", points14: 0.9103, points16: 0.9143, points18: 0.9053, points20: 0.9432, col: "slateblue"},
    {country: "シンガポール",  points14: 0.9076, points16: 0.8828, points18: 0.8812, points20: 0.9150, col: "firebrick"},
    {country: "フランス",     points14: 0.8938, points16: 0.8456, points18: 0.8790, points20: 0.8718, col: "orchid"},
    {country: "オランダ",     points14: 0.8897, points16: 0.8659, points18: 0.8757, points20: 0.9228, col: "lawngreen"},
    {country: "日本",        points14: 0.8748, points16: 0.8440, points18: 0.8783, points20: 0.8989, col: "peru"},
    {country: "アメリカ",     points14: 0.8695,points16: 0.8420, points18: 0.8769, points20: 0.9297, col: "orange"},
    {country: "イギリス",     points14: 0.8694, points16: 0.9193, points18: 0.8999, points20: 0.9358, col: "mediumaquamarine"},
    {country: "ニュージーランド", points14: 0.8449, points16: 0.8659, points18: 0.8806, points20: 0.9339, col: "olive"},
    {country: "フィンランド",  points14: 0.8418, points16: 0.8817, points18: 0.8815, points20: 0.9452, col: "royalblue"},
    {country: "カナダ",       points14: 0.8410, points16: 0.8285, points18: 0.8258, points20: 0.8420, col: "deeppink"},
    {country: "スペイン",     points14: 0.8357, points16: 0.8135, points18: 0.8415, points20: 0.8801, col: "khaki"},
    {country: "ノルウェー",   points14: 0.8225, points16: 0.8117, points18: 0.8557, points20: 0.9064, col: "orangered"},
    {country: "スウェーデン", points14: 0.8180, points16: 0.8704, points18: 0.8882, points20: 0.9365, col: "indigo"},
    {country: "エストニア",   points14: 0.8162, points16: 0.8334, points18: 0.8486, points20: 0.9473, col: "darkgreen"},
    {country: "デンマーク",   points14: 0.8162, points16: 0.8510, points18: 0.9150, points20: 0.9758, col: "teal"},
  ]
  
  return (
  
  <svg width={width} height={height}>
    <g transform="translate(40,140) scale(0.8)">

      <text transform="translate(-40, -80) rotate(-30)">韓国</text><ellipse cx = {-45} cy = {-82} rx = "3" ry = "3" fill = "lavender"/>
      <text transform="translate(10, -80) rotate(-30)">オーストラリア</text><ellipse cx = {5} cy = {-82} rx = "3" ry = "3" fill = "slateblue"/>
      <text transform="translate(60, -80) rotate(-30)">シンガポール</text><ellipse cx = {55} cy = {-82} rx = "3" ry = "3" fill = "firebrick"/>
      <text transform="translate(110, -80) rotate(-30)">フランス</text><ellipse cx = {105} cy = {-82} rx = "3" ry = "3" fill = "orchid"/>
      <text transform="translate(160, -80) rotate(-30)">オランダ</text><ellipse cx = {155} cy = {-82} rx = "3" ry = "3" fill = "lawngreen"/>
      <text transform="translate(210, -80) rotate(-30)">日本</text><ellipse cx = {205} cy = {-82} rx = "3" ry = "3" fill = "peru"/>
      <text transform="translate(260, -80) rotate(-30)">アメリカ</text><ellipse cx = {255} cy = {-82} rx = "3" ry = "3" fill = "orange"/>
      <text transform="translate(310, -80) rotate(-30)">イギリス</text><ellipse cx = {305} cy = {-82} rx = "3" ry = "3" fill = "mediumaquamarine"/>
      <text transform="translate(-40, 0) rotate(-30)">デンマーク</text><ellipse cx = {-45} cy = {2} rx = "3" ry = "3" fill = "teal"/>
      <text transform="translate(10 , 0) rotate(-30)">フィンランド</text><ellipse cx = {5} cy = {2} rx = "3" ry = "3" fill = "royalblue"/>
      <text transform="translate(60, 0) rotate(-30)">カナダ</text><ellipse cx = {55} cy = {2} rx = "3" ry = "3" fill = "deeppink"/>
      <text transform="translate(110, 0) rotate(-30)">スペイン</text><ellipse cx = {105} cy = {0} rx = "3" ry = "3" fill = "khaki"/>
      <text transform="translate(160, 0) rotate(-30)">ノルウェー</text><ellipse cx = {155} cy = {0} rx = "3" ry = "3" fill = "orangered"/>
      <text transform="translate(210, 0) rotate(-30)">スウェーデン</text><ellipse cx = {205} cy = {0} rx = "3" ry = "3" fill = "indigo"/>
      <text transform="translate(260, 0) rotate(-30)">エストニア</text><ellipse cx = {255} cy = {0} rx = "3" ry = "3" fill = "darkgreen"/>
      <text transform="translate(310, 0) rotate(-30)">ニュージーランド</text><ellipse cx = {305} cy = {0} rx = "3" ry = "3" fill = "olive"/>     
      
      <line x1="0" y1="30" x2="0" y2={height/2+150} stroke="black" />
      <line x1={width-45} y1="30" x2={width-45} y2={height/2+150} stroke="black" />
      <line x1="0" y1={height/2+150} x2={width-45} y2={height/2+150} stroke="black" />

      <line x1="-10" y1="40" x2="0" y2="40" stroke="black" /><text x="-10"  y="44" textAnchor="end" font-size="13">1.0</text>
      <line x1="-10" y1="260" x2="0" y2="260" stroke="black" /><text x="-10"  y="264" textAnchor="end" font-size="13">0.9</text>
      <line x1="-10" y1="480" x2="0" y2="480" stroke="black" /><text x="-10"  y="484" textAnchor="end" font-size="13">0.8</text>
      <text x="-10"  y={height/2+150} textAnchor="end" font-size="13">0</text>
      <path d="M-30 510 C -5 490, 0 490, 15 510 S40 540, 55 510" stroke="black" fill="transparent"/>
      <path d="M-30 520 C -5 500, 0 500, 15 520 S40 550, 55 520" stroke="black" fill="transparent"/>

      <line x1="15" y1={height/2+150} x2="15" y2={height/2+160} stroke="black" /><text x="15"  y={height/2+169} textAnchor="middle" font-size="13">2014</text>
      <line x1="190" y1={height/2+150} x2="190" y2={height/2+160} stroke="black" /><text x="190"  y={height/2+169} textAnchor="middle" font-size="13">2016</text>
      <line x1="365" y1={height/2+150} x2="365" y2={height/2+160} stroke="black" /><text x="365"  y={height/2+169} textAnchor="middle" font-size="13">2018</text>
      <line x1="540" y1={height/2+150} x2="540" y2={height/2+160} stroke="black" /><text x="540"  y={height/2+169} textAnchor="middle" font-size="13">2020</text>
      
      {dataEGDI.map((item, i) => {
          return (
            <g transform="translate(0,0)">
              
               
              <line x1 = {15} y1 = {(height/2+40)-(item.points14*2200-1760)} x2 = {190} y2 = {(height/2+40)-(item.points16*2200-1760)} stroke={item.col}/>
              <line x1 = {190} y1 = {(height/2+40)-(item.points16*2200-1760)} x2 = {365} y2 = {(height/2+40)-(item.points18*2200-1760)} stroke={item.col}/>
              <line x1 = {365} y1 = {(height/2+40)-(item.points18*2200-1760)} x2 = {540} y2 = {(height/2+40)-(item.points20*2200-1760)} stroke={item.col}/>
              
              <ellipse
                  cx = {15}
                  cy = {(height/2+40)-(item.points14*2200-1760)}
                  rx = "3"
                  ry = "3"
                  fill = {item.col}
              />
              <ellipse
                  cx = {190}
                  cy = {(height/2+40)-(item.points16*2200-1760)}
                  rx = "3"
                  ry = "3"
                  fill = {item.col}
              />
              <ellipse
                  cx = {365}
                  cy = {(height/2+40)-(item.points18*2200-1760)}
                  rx = "3"
                  ry = "3"
                  fill = {item.col}
              />
              <ellipse
                  cx = {540}
                  cy = {(height/2+40)-(item.points20*2200-1760)}
                  rx = "3"
                  ry = "3"
                  fill = {item.col}
              />            
            </g>
          );
        })}
    </g>
  </svg>
);
};

const Graph2 = () => {
  
  
  const width = 600
  const height = 800
  var preInt = height
  var preIntO = height
  
  const dataInternet = [
    {year: 2010, point: 0.78, pointOld: 0.4665, population: 11103, population65: 2923},
    {year: 2011, point: 0.782, pointOld: 0.5077, population: 11123, population65: 2953},
    {year: 2012, point: 0.791, pointOld: 0.5137, population: 11113, population65: 3007},
    {year: 2013, point: 0.795, pointOld: 0.5387, population: 11106, population65: 3119},
    {year: 2014, point: 0.828, pointOld: 0.5632, population: 11107, population65: 3227},
    {year: 2015, point: 0.83, pointOld: 0.5697, population: 11111, population65: 3334},
    {year: 2016, point: 0.835, pointOld: 0.575, population: 11110, population65: 3414},
    {year: 2017,  point: 0.806, pointOld: 0.5387, population: 11102, population65: 3479},
    {year: 2018,  point: 0.798, pointOld: 0.5675, population: 11097, population65: 3530},
    {year: 2019,  point: 0.898, pointOld: 0.7825, population: 11093, population65: 3568},
  ]
  
  return (
  
  <svg width={width} height={height}>
    <g transform="translate(50,50) scale(0.8)">
      <line x1="0" y1="0" x2="0" y2={height/2+150} stroke="black" />
      <line x1="0" y1={height/2+150} x2={width-45} y2={height/2+150} stroke="black" />
      <line x1="0" y1={0} x2={width-45} y2={0} stroke="silver" />
      <line x1="0" y1={110} x2={width-45} y2={110} stroke="silver" />
      <line x1="0" y1={220} x2={width-45} y2={220} stroke="silver" />
      <line x1="0" y1={330} x2={width-45} y2={330} stroke="silver" />
      <line x1="0" y1={440} x2={width-45} y2={440} stroke="silver" />

      <text x="-10"  y={0} textAnchor="end" font-size="13">100</text>
      <text x="-10"  y={110} textAnchor="end" font-size="13">80</text>
      <text x="-10"  y={220} textAnchor="end" font-size="13">60</text>
      <text x="-10"  y={330} textAnchor="end" font-size="13">40</text>
      <text x="-10"  y={440} textAnchor="end" font-size="13">20</text>
      <text x="-10"  y={height/2+150} textAnchor="end" font-size="13">0</text>
    
            <g transform="translate(0,0)"> 
             {dataInternet.map((item, i) => {
              preInt = dataInternet[Math.max(0, i - 1)]["point"]
              preIntO = dataInternet[Math.max(0, i - 1)]["pointOld"]
                return (
                  <g key={item.year} transform="translate(30,0)">
                    <line x1 = {Math.max(0, 53 * (i - 1))} y1 = {(height/2+150)-550*preInt} x2 = {53*i} y2 = {(height/2+150)-550*item.point} stroke="orange"/>
                    <ellipse
                        cx = {53*i}
                        cy = {(height/2+150)-550*item.point}
                        rx = "3"
                        ry = "3"
                        fill = "orange"
                    />

                    <line x1 = {Math.max(0, 53 * (i - 1))} y1 = {(height/2+150)-550*preIntO} x2 = {53*i} y2 = {(height/2+150)-550*item.pointOld} stroke="skyblue"/>
                    <ellipse
                        cx = {53*i}
                        cy = {(height/2+150)-550*item.pointOld}
                        rx = "3"
                        ry = "3"
                        fill = "skyblue"
                    />
                    <text x={53*i} y={height/2+163} font-size="13" textAnchor="start"　>
                     {item.year}
                    </text>
                   </g>             
                );
              })}      
            </g>
    </g>
  </svg>
);
};

const Graph3 = () => {
  
  
  const width = 600
  const height = 900
  const barHeight = 20;
  
  
  const dataOnline = [
    {ministry: "国土交通省",    total: 10628, online: 297, p: 2.8, col1: "royalblue", col2: "seagreen"},
    {ministry: "厚生労働省",    total: 9240, online: 1037, p: 11.3, col1: "royalblue", col2: "seagreen"},
    {ministry: "経済産業省",    total: 6666, online: 519, p: 7.8, col1: "royalblue", col2: "seagreen"},
    {ministry: "財務省省",      total: 5645, online: 1358, p: 24.1, col1: "royalblue", col2: "seagreen"},
    {ministry: "総務省",        total: 4858, online: 388, p: 8.0, col1: "royalblue", col2: "seagreen"},
    {ministry: "農林水産省",     total: 4764, online: 60, p: 1.3, col1: "royalblue", col2: "seagreen"},
    {ministry: "金融庁",        total: 4158, online: 168, p: 4.0, col1: "royalblue", col2: "seagreen"},
    {ministry: "法務省",        total: 1067, online: 34, p: 4.5, col1: "royalblue", col2: "seagreen"},
    {ministry: "国家公安委員会", total: 1675, online: 76, p: 3.2, col1: "royalblue", col2: "seagreen"},
  ]
  const dataProcedure = [
    {name: "法令上オンライン可", p:93, col1: "hotpink", col2: "lime"},
    {name: "手続種類数", p:13, col1: "hotpink", col2: "lime"},
    {name: "オンライン利用率", p:57, col1: "hotpink", col2: "lime"}
  ]
  
  return (
  
  <svg width={width} height={height}>
    <g transform="translate(50,50) scale(0.8)">
      <line x1="0" y1="0" x2="0" y2={height/2+150} stroke="black" />
      <line x1="0" y1={height/2+150} x2={width-45} y2={height/2+150} stroke="black" />
      <line x1="0" y1={0} x2={width-45} y2={0} stroke="silver" />
      <line x1="0" y1={100} x2={width-45} y2={100} stroke="silver" />
      <line x1="0" y1={200} x2={width-45} y2={200} stroke="silver" />
      <line x1="0" y1={300} x2={width-45} y2={300} stroke="silver" />
      <line x1="0" y1={400} x2={width-45} y2={400} stroke="silver" />
      <line x1="0" y1={500} x2={width-45} y2={500} stroke="silver" />

      <text x="-10"  y={0} textAnchor="end" font-size="13">（件）</text>
      <text x="-10"  y={100} textAnchor="end" font-size="13">1万</text>
      <text x="-10"  y={200} textAnchor="end" font-size="13">8千</text>
      <text x="-10"  y={300} textAnchor="end" font-size="13">6千</text>
      <text x="-10"  y={400} textAnchor="end" font-size="13">4千</text>
      <text x="-10"  y={500} textAnchor="end" font-size="13">2千</text>
      <text x="-10"  y={height/2+150} textAnchor="end" font-size="13">0</text>
    
      <g transform="translate(0,0)">
        {dataOnline.map((item, i) => {
          return (
            <g key={item.ministry} transform={`translate(${60 * (i + 1)},0)`}>
              <rect
                x={-barHeight}
                y={600-(item.total/20)}
                width={barHeight}
                height={(item.total/20)}
                fill={item.col1}
              />
              <rect
                x={-barHeight}
                y={600-(item.online/20)}
                width={barHeight}
                height={(item.online/20)}
                fill={item.col2}
              />
              <text x="-12" y={600-(item.online/20)} textAnchor="middle" fill="red" font-size="20">
                {item.p}
              </text>
              <text x="5" y={600-(item.online/20)} textAnchor="start" fill="red" font-size="12">
                {"%"}
              </text>
              <text x="-12" y={height/2+150} textAnchor="start"　writing-mode="tb">
                {item.ministry}
              </text>
              </g>             
          );
        })}
        <g>
          
          <line x1="-5" y1={750} x2={550} y2={750} stroke="black" />
          <line x1="-5" y1={1000} x2={550} y2={1000} stroke="black" /> 
          <line x1="550" y1={750} x2={550} y2={1000} stroke="black" /> 
          <line x1={50} y1={780} x2={50} y2={1000} stroke="silver" /><text x={50}  y={777} textAnchor="middle" font-size="13" fill="gray">0%</text>
          <line x1={140} y1={780} x2={140} y2={1000} stroke="silver" /><text x={140}  y={777} textAnchor="middle" font-size="13" fill="gray">20%</text>
          <line x1={230} y1={780} x2={230} y2={1000} stroke="silver" /><text x={230}  y={777} textAnchor="middle" font-size="13" fill="gray">40%</text>
          <line x1={320} y1={780} x2={320} y2={1000} stroke="silver" /><text x={320}  y={777} textAnchor="middle" font-size="13" fill="gray">60%</text>
          <line x1={410} y1={780} x2={410} y2={1000} stroke="silver" /><text x={410}  y={777} textAnchor="middle" font-size="13" fill="gray">80%</text>
          <line x1={500} y1={780} x2={500} y2={1000} stroke="silver" /><text x={500}  y={777} textAnchor="middle" font-size="13" fill="gray">100%</text> 
          
          {dataProcedure.map((item, i) => {
          return (
            <g key={item.p} transform={`translate(50,${20 * i })`}>
              <text x={-2}  y={785+50*(i+1)} textAnchor="end" font-size="12" fill="black">{item.name}</text>
              <rect
                x={0}
                y={750+50*(i+1)}
                width={450}
                height={50}
                fill={item.col1}
              />
              <rect
                x={0}
                y={750+50*(i+1)}
                width={item.p*4.5}
                height={50}
                fill={item.col2}
              />
              <text x={item.p*4.5/2}  y={785+50*(i+1)} textAnchor="middle" font-size="30" fill="red">{item.p}%</text>
            </g>
              );
            })}     
        </g>     
      </g>
    </g>
  </svg>
);
};

const Graph4 = () => {
  
  
  const width = 600
  const height = 800
  var pre1 = height
  const barHeight = 50
  
  const dataMynumber = [
    {year: 2016, point: 6.3, num: 8347992},
    {year: 2017, point: 8.4, num: 10717919},
    {year: 2018, point: 10.7, num: 13672762},
    {year: 2019, point: 13.0, num: 16572762},
    {year: 2020, point: 15.0, num: 19101271},
  ]
  
  return (
  
  <svg width={width} height={height}>
    <g transform="translate(30,50) scale(0.8)">
      <line x1={0} y1={0} x2={0} y2={height/2+150} stroke="black" />
      <line x1={0} y1={height/2+150} x2={width-45} y2={height/2+150} stroke="black" />
      <line x1={width-45} y1={0} x2={width-45} y2={height/2+150} stroke="black" />

      <line x1="0" y1={0} x2={width-45} y2={0} stroke="silver" />
      <line x1="0" y1={110} x2={width-45} y2={110} stroke="silver" />
      <line x1="0" y1={220} x2={width-45} y2={220} stroke="silver" />
      <line x1="0" y1={330} x2={width-45} y2={330} stroke="silver" />
      <line x1="0" y1={440} x2={width-45} y2={440} stroke="silver" />

      <text x="-2"  y={50} textAnchor="end" font-size="13">(万枚)</text>
      <text x="-2"  y={110} textAnchor="end" font-size="13">2000</text>
      <text x="-2"  y={220} textAnchor="end" font-size="13">1500</text>
      <text x="-2"  y={330} textAnchor="end" font-size="13">1000</text>
      <text x="-2"  y={440} textAnchor="end" font-size="13">500</text>
      <text x="-2"  y={height/2+150} textAnchor="end" font-size="13">0</text>
      <text x={width-40}  y={550} textAnchor="start" font-size="13">0</text>
      <text x={width-40}  y={440} textAnchor="start" font-size="13">5</text>
      <text x={width-40}  y={330} textAnchor="start" font-size="13">10</text>
      <text x={width-40}  y={220} textAnchor="start" font-size="13">15</text>
      <text x={width-40}  y={110} textAnchor="start" font-size="13">20</text>
      <text x={width-40}  y={90} textAnchor="start" font-size="13">(%)</text>
    
            <g transform="translate(0,0)"> 
             {dataMynumber.map((item, i) => {
              pre1 = dataMynumber[Math.max(0, i - 1)]["point"]
                return (
                  <g key={item.year} transform="translate(75,0)">
                    <rect
                      x={100*i-25}
                      y={(height/2+149)-((item.num)/10000*0.22)}
                      width={barHeight}
                      height={((item.num)/10000*0.22)}
                      fill={"lightblue"}
                    />
                    <line x1 = {Math.max(0, 100 * (i-1))} y1 = {(height/2+150)-22*pre1} x2 = {100*i} y2 = {(height/2+150)-22*item.point} stroke="orange"/>
                    <ellipse
                        cx = {100*i}
                        cy = {(height/2+150)-22*item.point}
                        rx = "3"
                        ry = "3"
                        fill = "orange"
                    />
                    <text x={100*i-10} y={(height/2+140)-22*item.point} font-size="13" textAnchor="start"　>{item.point}</text>
                    <text x={100*i-15} y={height/2+163} font-size="13" textAnchor="start"　>
                     {item.year}
                    </text>
                  </g>            
                );
              })}      
            </g>
    </g>
  </svg>
);
};


export default App;