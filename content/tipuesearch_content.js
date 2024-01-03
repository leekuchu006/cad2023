var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': 'w9', 'text': '利用各種不同軟體製作磁浮球。 \n PPT \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '\xa0 \xa0本周以Git clone的指令將倉儲取下。 \n 由於replit的容量不堪使用，老師教我們用指令取出cad2023 : \n \xa0 \xa0 git clone --recurse-submodules\xa0 git@github.com :帳號/cad2023.git \n 取下後還需在Putty設定Session \n 設定完後以CMD執行cms \n 進入網頁https:localhost:9445即可進行網頁維護。 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '\xa0 \xa0本周解決了無法Git push的問題。 \n 上周在Acp時出現了unable to open connection的問題 \n 也有動態網站Acp無法作動之情形發生。 \n 了解後發現是session沒有設定好，Acp也改以CMD執行。 \n 在詢問ChatGPT後，整理出下列指令 \n \xa0 \xa0 git add .\xa0 →\xa0 git commit -m"title" →\xa0 git push \n 執行完後即完成Acp。 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '\xa0 \xa0本周以ChatGPT瞭解AI之利與弊。 \n 老師以座位之問題為基礎，要求ChatGPT解決 :\xa0 \n \xa0 \xa0 問題一 :\xa0 利用 Python 讀取下列檔案名稱為 2b_w12_seat.txt "2b stud num\xa0\xa0 \xa0seat \n 最後由ChatGPT之回覆可知，ChatGPT可以讀取程式，但是少了排序資料的程序。 \n \xa0 \xa0 再來老師要求ChatGPT以Brython語言改寫座位程式 \n 結果ChatGPT以JavaScript和Brython進行混用，由於非課程所需，故不採用。 \n \xa0 \xa0 在看過老師操作ChatGPT以及個人操作經驗後，我認為ChatGPT由於資料庫龐大，故給出的答案可能混雜過多不必要的變數。 \n \xa0 \xa0所以在詢問ChatGPT之前，若能給予更多條件或限制，將變數盡可能地減少，給出的答覆可能會更理想。 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': "本周排除了git push的問題。 \n 這周再進行git push時發生下列情況 :\xa0 \n \xa0\xa0 ! [rejected] main -> main (non-fast-forward) error: failed to push some refs to 'cad2023:leekuchu006/cad2023.git' \n 經過詢問ChatGPT後試了很多方法，包括rebase、git pull origin main、fast forward only等等 \n 最後發現問題是線上版本的 內容比電腦裡這份還要新，所以Git拒絕推送 \n 我就利用了\xa0 git push -f 進行強制推送 \n Git就將我的版本強制更新上去了 \n 但這個指令在進行協同作業時，會將對方的進度直接蓋掉，要避免使用。 \n", 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\xa0 本周是小考周 \n 老師以平面鋼球永動模擬器為題讓我們進行考試，考試過程我發現自己只能做完繪圖的部分，後面的機構設計、 CoppeliaSim 轉換等等我都沒辦法操作，要反覆看老師的影片來複習或是詢問同學。 \n 在繪圖過程中遇到了軌道曲面的問題，反覆思考如何讓軌道產生曲面輪廓，最後順利地以除料的方式產生出了曲面的軌道。 \n', 'tags': '', 'url': 'w14.html'}, {'title': 'Exam', 'text': '\xa0 利用Onshape製作彈珠永動機\xa0 \n 一開始遇到軌道曲面的問題，最後利用在前視圖繪製三角形來模擬出軌道之曲面，最後成品如下。 \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': '倉儲評分項目', 'text': '', 'tags': '', 'url': '倉儲評分項目.html'}, {'title': 'B項目', 'text': '根據\xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論。 \n 若IPv6設定為自動取得IP和DNS，必須要有代理主機才能夠連接只支援IPv4之網站，故需要設定Proxy來設定代理主機。 \n 例如: \n [2001:288:6004:17::4]:3128 \n [2001:288:6004:17::42]:3128 \n [2001:288:6004:17::53]:3128 \n [2001:288:6004:17::69]:3128 \n 不一定每條IP皆為通路，需多方嘗試，網速也不盡相同。 \n 而Proxy應變更為手動設定，須將自動偵測關閉。 \n', 'tags': '', 'url': 'B項目.html'}, {'title': 'D項目', 'text': '就所分配的\xa0 CAD 套件 從安裝設定到繪圖提供內容參考。 \n NX可攜式環境下載如下。 \n \n \n 磁浮球模型繪圖。 \n 在繪圖過程中，最頭痛的地方就是軌道尾部的圓弧，如何找到合適的角度，使鋼球能順利進行反覆運動。 \n', 'tags': '', 'url': 'D項目.html'}, {'title': 'E項目', 'text': '使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載。 \n F項目 \n 將自行繪製的專案一零組件轉入 CoppeliaSim。 \n', 'tags': '', 'url': 'E項目.html'}, {'title': 'G項目', 'text': '利用\xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬。 \n', 'tags': '', 'url': 'G項目.html'}, {'title': 'H項目', 'text': '實際操作\xa0 Triangle 軌道系統 的鋼球永動 模擬。 \n 利用Solvespace開啟Triangle軌道。 \n \n 將檔案以stl檔匯出 \n 確認沒有問題後以CoppeliaSim啟動。 \n \n 執行鋼球往復運動。 \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'H項目.html'}]};