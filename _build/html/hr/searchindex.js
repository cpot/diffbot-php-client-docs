Search.setIndex({envversion:46,filenames:["01-diffbot","abstract-api","abstract-entity","api-analyze","api-article","api-crawl","api-custom","api-discussion","api-image","api-product","api-search","class-entityfactory","class-entityiterator","class-exceptions","class-interfaces","class-traits","index","overview"],objects:{"":{"Swader\\Diffbot":[0,0,0,"-"],"Swader\\Diffbot\\Abstracts":[2,0,0,"-"],"Swader\\Diffbot\\Abstracts\\Api":[1,2,1,""],"Swader\\Diffbot\\Abstracts\\Api::__construct":[1,1,1,""],"Swader\\Diffbot\\Abstracts\\Api::buildUrl":[1,1,1,""],"Swader\\Diffbot\\Abstracts\\Api::call":[1,1,1,""],"Swader\\Diffbot\\Abstracts\\Api::setTimeout":[1,1,1,""],"Swader\\Diffbot\\Abstracts\\Entity":[2,2,1,""],"Swader\\Diffbot\\Abstracts\\Entity::__call":[2,1,1,""],"Swader\\Diffbot\\Abstracts\\Entity::__construct":[2,1,1,""],"Swader\\Diffbot\\Abstracts\\Entity::__get":[2,1,1,""],"Swader\\Diffbot\\Abstracts\\Entity::getData":[2,1,1,""],"Swader\\Diffbot\\Api":[10,0,0,"-"],"Swader\\Diffbot\\Api\\Analyze":[3,2,1,""],"Swader\\Diffbot\\Api\\Analyze::setDiscussion":[3,1,1,""],"Swader\\Diffbot\\Api\\Analyze::setMode":[3,1,1,""],"Swader\\Diffbot\\Api\\Article":[4,2,1,""],"Swader\\Diffbot\\Api\\Article::__construct":[4,1,1,""],"Swader\\Diffbot\\Api\\Article::setDiscussion":[4,1,1,""],"Swader\\Diffbot\\Api\\Article::setMaxTags":[4,1,1,""],"Swader\\Diffbot\\Api\\Article::setPaging":[4,1,1,""],"Swader\\Diffbot\\Api\\Article::setSentiment":[4,1,1,""],"Swader\\Diffbot\\Api\\Crawl":[5,2,1,""],"Swader\\Diffbot\\Api\\Custom":[6,2,1,""],"Swader\\Diffbot\\Api\\Custom::__construct":[6,1,1,""],"Swader\\Diffbot\\Api\\Discussion":[7,2,1,""],"Swader\\Diffbot\\Api\\Image":[8,2,1,""],"Swader\\Diffbot\\Api\\Product":[9,2,1,""],"Swader\\Diffbot\\Api\\Search":[10,2,1,""],"Swader\\Diffbot\\Diffbot":[0,2,1,""],"Swader\\Diffbot\\Diffbot::crawl":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createAnalyzeApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createArticleApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createCustomApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createDiscussionApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createImageApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::createProductApi":[0,1,1,""],"Swader\\Diffbot\\Diffbot::getEntityFactory":[0,1,1,""],"Swader\\Diffbot\\Diffbot::getHttpClient":[0,1,1,""],"Swader\\Diffbot\\Diffbot::getToken":[0,1,1,""],"Swader\\Diffbot\\Diffbot::search":[0,1,1,""],"Swader\\Diffbot\\Diffbot::setEntityFactory":[0,1,1,""],"Swader\\Diffbot\\Diffbot::setHttpClient":[0,1,1,""],"Swader\\Diffbot\\Diffbot::setToken":[0,6,1,""],"Swader\\Diffbot\\Entity":[12,0,0,"-"],"Swader\\Diffbot\\Entity\\Article":[4,2,1,""],"Swader\\Diffbot\\Entity\\Article::__construct":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getAuthor":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getDate":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getDiscussion":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getHtml":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getImages":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getNextPages":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getNumPages":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getSentiment":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getTags":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getText":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getType":[4,1,1,""],"Swader\\Diffbot\\Entity\\Article::getVideos":[4,1,1,""],"Swader\\Diffbot\\Entity\\EntityIterator":[12,2,1,""],"Swader\\Diffbot\\Entity\\JobCrawl":[5,2,1,""],"Swader\\Diffbot\\Entity\\Wildcard":[6,2,1,""],"Swader\\Diffbot\\Exceptions":[13,0,0,"-"],"Swader\\Diffbot\\Exceptions\\DiffbotException":[13,4,1,""],"Swader\\Diffbot\\Factory":[11,0,0,"-"],"Swader\\Diffbot\\Factory\\Entity":[11,2,1,""],"Swader\\Diffbot\\Interfaces":[14,0,0,"-"],"Swader\\Diffbot\\Interfaces\\Api":[14,3,1,""],"Swader\\Diffbot\\Interfaces\\Api::buildUrl":[14,1,1,""],"Swader\\Diffbot\\Interfaces\\Api::call":[14,1,1,""],"Swader\\Diffbot\\Interfaces\\Api::setTimeout":[14,1,1,""],"Swader\\Diffbot\\Interfaces\\EntityFactory":[14,3,1,""],"Swader\\Diffbot\\Interfaces\\EntityFactory::createAppropriateIterator":[14,1,1,""],"Swader\\Diffbot\\Traits":[15,0,0,"-"],"Swader\\Diffbot\\Traits\\DiffbotAware":[15,5,1,""],"Swader\\Diffbot\\Traits\\DiffbotAware::registerDiffbot":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardApi":[15,5,1,""],"Swader\\Diffbot\\Traits\\StandardApi::setBreadcrumb":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardApi::setQuerystring":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity":[15,5,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getBreadcrumb":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getHumanLanguage":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getLang":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getLinks":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getMeta":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getPageUrl":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getQueryString":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getResolvedPageUrl":[15,1,1,""],"Swader\\Diffbot\\Traits\\StandardEntity::getTitle":[15,1,1,""]}},objnames:{"0":["php","namespace","PHP namespace"],"1":["php","method","PHP method"],"2":["php","class","PHP razred"],"3":["php","interface","PHP interface"],"4":["php","exception","PHP izuzetak"],"5":["php","trait","PHP trait"],"6":["php","staticmethod","staticmethod"]},objtypes:{"0":"php:namespace","1":"php:method","2":"php:class","3":"php:interface","4":"php:exception","5":"php:trait","6":"php:staticmethod"},terms:{"1_code":15,"boolean":4,"case":4,"catch":3,"class":[0,1,2],"default":[0,1,3,4,14],"float":4,"import":2,"int":[1,4,14],"long":4,"new":[0,3,4,6,17],"null":[0,2,3,4,15],"return":[0,1,2,3,4,6,14,15],"static":0,"throw":[1,2],"true":[3,4,15],"void":0,"vra\u0107a":[0,1,2,3,4,14,15],"while":[0,4],abl:4,about:[0,4,5],abov:[0,3,4,6,15],absent:4,accept:0,access:[4,15],account:4,actual:0,add:15,addit:[2,6],addition:4,advanc:4,after:[4,14,15],ako:[0,17],aktivira:0,alia:15,all:[0,2,3,4,6,14,15],allow:0,along:[0,6],alreadi:4,also:[0,4,6],altern:[1,4],alwai:4,amazon:0,analysi:4,analyz:0,ani:[3,4,15],anyth:0,api:0,aplikacijama:17,aplikacijom:13,appear:15,appli:3,appropri:[3,14],apstraktna:1,area:0,aren:15,argument:[1,2,4],arrai:[0,2,4,15],articl:[0,2,3],articleapi:[0,17],ask:2,aspekt:17,associ:2,aukcijskim:17,author:[0,2,3,4,6,17],authorfolio:[0,6],auto:[3,4],autodetect:0,autoload:6,automat:[1,2,3,4,14],autora:0,avail:[0,3,15],awar:15,babi:0,baca:0,bacen:13,bacena:13,badmethodcallexcept:2,basic:4,bazi:0,baziran:1,becaus:6,becom:4,been:15,behav:4,below:[0,2,4],best:4,bez:0,bibiliotekama:13,bind:14,bio:0,bist:[1,17],biti:[1,13,17],bitn:17,bliskoj:17,blog:[0,4,17],board:[0,14],bool:[3,4,15],both:2,breadcrumb:15,broj:17,bruno:[0,6,17],brzi:16,bskvorc:[0,3,6],buckwheat:0,buduc:0,buducnosti:17,build:[1,4,6,14],built:[0,4,14],bulk:0,cal:4,call:0,can:[0,1,4,6,14,15],caramel:0,card:[14,15],catalog:0,ceka:1,cekanja:1,certain:0,cete:17,chanc:4,chang:[0,4],charact:15,children:15,cilj:13,citljivi:17,clank:17,client:[0,1,4,14,15,17],cloudfront:4,code:15,coder:[0,6],collect:[0,4,17],com:[0,3,4,6,17],come:0,comment:[0,3,4],common:15,complet:4,compos:17,composera:17,concat:4,concaten:4,concret:6,configur:[2,15],conjunct:[0,1,4],consist:4,construct:[1,2,4,6],constructor:4,contain:[2,4,5,6,14,15],content:[0,3,4,14,15],context:14,contract:14,convers:4,correspond:14,could:4,count:4,crawlbot:0,crawlbotu:0,crawler:4,crawlera:17,crawljob:[0,5],crawljoba:0,crawljobovima:0,creat:[0,4,6],croatia:[0,6],cross:4,current:[0,2,6],custom:[0,1],dab1nmslvvntp:4,daje:17,dajt:17,daljnj:13,danim:17,data:[0,2,3,4,14,15],dataset:[0,2],date:4,dati:17,dbpedia:4,deal:0,dec:4,defaultn:0,defin:[0,4,6,14,15],definira:1,definirajt:17,definirani:0,definiranih:17,definiranom:1,degre:0,demo:4,depth:0,describ:[2,4,15],descript:[5,7,8,9,10,11,12,14],detail:[0,4],detaljno:17,detect:[4,15],determin:[3,4],develop:[0,14],developeri:17,diffbota:17,diffbotexcept:0,diffbotov:16,diffbotovim:[1,16,17],diffbotovom:1,diffbotovu:17,diffbotu:[0,17],diffboturi:4,differ:[4,6],direct:2,directli:2,directori:0,direktni:17,direktno:0,discret:15,discuss:[0,2,3,4],dispatch:6,disqu:[0,3,4],dobiva:0,dobivaju:0,dobiven:17,dobivenih:0,dobro:17,dobrog:0,doc:[0,15],document:[0,4,14,15],dodatnom:0,doe:[3,4,6],doesn:15,dokuc:17,dokument:13,dokumentaciji:17,dokumentaciju:[0,16,17],dokumentira:1,domain:0,don:0,done:4,down:0,download:0,druge:1,drugi:0,drugih:17,drugim:17,drugo:1,drugu:0,due:[3,4],dugo:1,dump:0,dure:[0,1,2,4],dvosmjern:17,each:[0,4,14],ebai:0,echo:[0,2,3,4,6,17],either:[0,3,4,15],elemenata:17,element:[4,15,17],elementima:17,embed:3,empti:4,enabl:4,end:6,endpoint:[2,14],engin:4,enough:4,entir:[0,4],entitet:0,entiteta:1,entitetima:17,entiti:[0,1],entityfactori:[0,6],entityiter:[1,2,4],essenti:4,etc:[0,2],even:[0,4,15],ever:4,everi:15,everyon:4,everyth:[4,6],evolv:4,exactli:3,exampl:[0,2,3,4,6,14],except:[0,6],exception:13,execut:[2,14],exist:3,expect:14,explan:0,explicitli:0,expos:4,extend:[4,15],extenda:13,extract:[0,3,4],fact:[4,6],factori:[0,6,11,14,15],fail:4,fals:[0,3,4,15,17],featur:4,field:[3,4,14,15],figur:4,file:15,find:[0,4],first:[0,2,4],five:4,follow:4,foreach:[0,1],format:15,formata:0,forum:0,forumima:17,forward:2,found:[2,4,15],friendli:4,from:[0,2,3,4,6,14,15],full:[0,4,15],fuller:4,fulli:3,funkcionalnosti:1,further:4,galerij:17,game:14,gamecard:14,gener:[0,4],get:[0,1,2,3,4,14],getauthor:0,getauthorurl:3,getbio:6,getdiscuss:3,getdownloadurl:0,getisbn:0,getnumpost:[3,4],getparticip:0,getprovid:[3,4],gettabl:2,getter:[0,2,4,15],gettitl:0,getxpath:0,give:14,glavni:13,global:0,globalni:0,globalno:0,gmt:4,god:17,goe:[5,7,8,9,10,11,12],googl:17,gore:17,grafickih:17,guid:0,guzzl:[14,17],guzzlehttp:[0,14],guzzlehttpcli:0,had:3,have:[0,4,6,14],haven:4,height:4,here:[0,4,5,6,7,8,9,10,11,12,15],homestead:[3,4],how:[0,14],howev:2,html:[4,17],http:[0,3,4,6,15,17],httpclient:[1,14],ident:[4,6,15],identifi:2,ignor:4,ili:[0,1,13,17],imag:[0,3,4],imaju:0,implemen:0,implement:[0,14,15],imun:17,includ:15,index:15,info:4,inform:[2,3,5,15],informacija:0,inherit:6,inject:15,insid:[2,4],instagram:17,instalirajt:17,instanc:[0,2,4,6,14,15],instanca:1,instancira:0,instancirati:0,instancu:17,instanti:[0,4,6,15],instead:[0,6],integ:1,inteligencij:17,interfac:0,interno:0,intuiciju:17,invalid:1,invalidargumentexcept:[0,1],invok:2,iskoristivi:0,isn:0,iso:15,ist:17,istima:17,itd:17,item:15,iter:[0,2,6,14],iterirati:1,izbjegavanja:0,izgraden:1,izgradili:[1,17],izmjenu:0,izostavi:0,izostavljiv:1,izvan:0,izvornom:17,izvrsava:1,izvrsenih:17,izvrsiti:0,javascript:4,jedan:[0,17],jedina:13,jem:17,jer:17,job:0,jobcrawl:0,johnson:0,joj:[0,17],json:[0,4,17],kad:1,kako:[0,1,17],kakvom:17,kao:[0,17],kei:[2,4,15],keyword:4,klase:[0,1],klasom:17,klasu:[1,13,17],klijent:0,klijenta:[0,17],klijentom:[13,16,17],kodu:17,koja:[1,13,17],koje:17,kojeg:0,koji:[0,1,13,17],kojima:13,kojoj:1,koju:[0,1,17],kolekcija:1,kolicin:17,koliko:1,komentara:17,komunikacij:17,konfiguraciju:0,konzumira:17,konzumiranj:17,korisnik:17,korisnika:13,korisno:0,korist:[0,17],koristan:13,koristenj:[0,1,17],koristenja:0,koristenjem:17,koristi:[0,13,17],koristit:1,krajnji:17,kreirajt:17,kreiranj:0,kroz:[1,17],label:4,lako:17,lakocom:17,languag:15,last:3,later:4,learn:[4,17],length:4,less:4,level:15,lexic:4,lexical_analysi:4,lightweight:0,like:[0,1,3,4,14,15],limit:4,link:[0,4,15],linkova:17,linkovi:16,list:4,list_of_iso_639:15,littl:4,live:0,ljudima:17,locat:[4,14],longer:4,look:[0,2,4],machin:[4,17],machine_learn:4,magic:[2,6],mai:14,main:[0,4,15],make:[2,14,15],mani:14,manual:[4,14],master:0,match:[0,3,6],max:4,maximum:4,mean:[2,4],merg:[4,17],messag:14,meta:[4,15,17],metadata:15,method:[0,1,2,4,6,14,15],metoda:[0,1],metodu:0,microdata:15,might:[4,14],mile:0,milisekundama:1,million:0,millisecond:14,minim:4,mislit:17,mismatch:3,miss:4,mix:2,mnogo:17,mode:[0,3,4],mogao:0,mogla:0,mogu:13,mogucnosti:0,mora:0,more:[0,2,4,6,15],most:15,moze:[1,13],much:0,multi:4,multipl:4,must:14,my_token:[0,3,4,6,17],mycrawl_01:0,myurl:[1,2],nacin:[0,17],nakon:17,nalazi:17,name:[0,2,4,6,15],namijenjena:16,namijenjeno:0,napokon:17,naslijedil:1,naturalheight:[0,4],naturalwidth:4,navedenih:17,need:[0,4,6,15],neg:[1,4],nejasnoca:0,neke:[1,17],neki:[13,17],neku:0,nema:[0,17],neobavezni:0,nesto:13,net:4,neuspjeh:1,never:2,newentityfactori:0,newli:14,next:4,nije:0,nijedan:0,njegovim:13,njen:13,non:3,none:0,note:[0,2,4],noth:6,novog:0,novosti:17,novu:17,number:4,numpag:4,numpost:0,nutshel:0,obavijest:13,obicnim:1,obicno:17,objasnjeni:17,object:0,objekata:17,obrad:[0,1,17],obradenih:0,obradi:1,obradjivati:17,obradom:0,obradu:[1,17],obtain:0,odaziv:1,odgovara:17,odgovarajucih:[1,17],odjednom:17,odstranjuj:17,oemb:15,off:3,offer:15,offerpric:0,often:[4,15],olaksava:17,omit:0,omogucava:0,onc:2,onli:[0,2,3,4,14,15],onlin:[0,17],ontolog:4,onward:4,opcenitudiffbot:16,opengraph:15,opis:13,opt:0,option:[4,15],order:[2,4],org:[4,15],osnovnu:13,ostali:17,other:[0,3,4,6,15],otherwis:14,out:[0,4],output:[0,4],outsid:0,ova:[1,16],ovaj:13,ovako:0,ovdj:0,over:4,overview:4,ovisi:17,ovisno:17,ovog:[0,17],ovoj:17,ovu:[0,1],own:15,page:[0,1,2,3,4,14,15],pair:15,param:[4,15],paramet:[0,14],parametar:0,parametra:0,parametri:[0,1,2,3,4,6,14,15],parent:[2,15],pars:3,part:4,parti:[1,14],pass:[0,2,4,6],per:[0,4],perez:0,petljama:1,php:[0,4,6,13,15],pinterest:17,place:0,plaintext:4,planir:17,planova:17,player:4,pleas:4,png:4,pocetak:16,podaci:0,podataka:[0,17],podatk:[0,17],podes:0,podesena:1,podesit:17,podrsku:0,pogledajt:17,point:6,pokusava:17,pomocu:17,popi:[13,17],popratnim:13,popul:4,portfolija:0,portfolio:[6,17],posaljit:17,poseban:0,posit:4,poslo:13,posrijedi:1,post:[0,4,6],postman:[1,14],postoji:0,postov:17,potreb:[0,13],potrebama:17,pouzdati:17,povratna:1,power:4,poziv:[1,17],poziva:[0,17],pozivu:1,practic:4,prazna:13,precis:0,predefin:14,preferirao:17,prefix:2,pregl:16,prelaz:17,prema:17,preporuca:16,present:15,pretjerivanja:17,pretraz:17,pretvaranj:0,pretvor:17,preuzimanj:0,prevario:17,prevelik:0,prikazano:0,prilikom:0,prima:0,primari:4,primjen:17,primjer:0,primjeri:17,pristup:[0,17],pristupa:17,probabl:[4,15],problema:1,process:[0,1,2,3,4,6,14,15],processedarticl:17,procesuira:[1,17],procesuiranja:17,procit:16,procitati:0,prodjit:17,produc:3,product:[0,3],programminglanguag:4,proizvod:17,promatra:17,properti:[2,4],prose:4,provid:4,pruza:17,prva:0,prvi:16,prvo:17,publishercountri:0,purpos:[1,14],puta:16,putem:17,queri:0,querystr:15,question:6,quick:[3,4],quicker:0,rada:0,radi:[0,17],rais:0,rang:4,rather:[2,14],raw:2,razlika:17,raznih:0,rdftype:4,read:[0,4],readi:6,receiv:14,recogn:[0,4],recommend:4,redirect:15,refer:0,referenc:4,relativno:17,reliabl:4,remain:4,remaind:2,remot:14,remov:4,requir:17,require_onc:6,resolv:[2,15],resourc:4,respons:14,responseinterfac:14,result:[0,1,3,4,6,15],review:[0,4],rezult:17,rfc:4,rijec:0,rijecima:17,robot:17,root:2,round:0,run:[3,4],sadrz:17,sadrzaj:16,sadrzaju:17,sadrzi:13,said:14,salt:0,sam:17,same:[4,15],samim:17,sarah:0,saznali:17,saznavanja:13,scenarija:0,scenario:0,schema:15,score:4,sdmb:0,sebe:17,second:14,section:[0,4],see:[0,2,4,6],seed:0,sekundi:1,semantria:4,send:4,sens:15,sentiment:4,seo:17,seri:4,server:1,serverima:1,servisima:17,servisu:17,set:[0,1,2,3,4,6,14,15,17],setdiscuss:0,setira:0,setse:0,setter:[0,15],settera:17,setteri:17,setup:4,seven:4,sever:[0,4],shop:0,shopov:17,should:14,showthread:0,shvati:17,simpl:[0,15],simpli:3,singl:[0,1,2,4],siromasniju:17,site:14,sitepoint:[0,3,4,6,17],situacij:13,size:4,sjatovima:17,skvorc:17,slanj:[0,17],slicno:17,slijedi:[13,17],sljedecih:17,sloj:17,slucaju:[0,13,17],sluzbeni:17,sluzbenu:17,sluzi:0,smittenkitchen:0,softverski:17,softwar:4,some:[2,4,14,15],someth:4,sort:3,sourc:4,spawn:15,specif:[0,3,6,14],specifi:14,specificn:[0,17],spoj:17,spore:1,spremnik:0,standard:[0,15],start:2,state:0,ste:17,step:0,still:0,sto:[0,17],stop:14,straightdop:0,stranic:[1,17],stranicama:17,string:[0,1,2,3,4,6,14,15],strip:4,strojnog:17,strtotim:4,structur:0,struktur:17,strukturiran:17,studi:4,sub:[4,15],subdomain:0,sucelju:[0,1],sulud:17,support:14,sure:[4,14],susrecet:16,sva:13,svaka:1,svakom:17,sve:[0,1,17],svega:17,svemu:0,svi:17,svim:0,svoj:17,svojim:17,svojstvima:17,swader:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17],syrup:0,tag:[4,15],tagova:17,taj:0,take:[1,2,4],tako:17,tandemu:17,techcrunch:0,technolog:0,tell:[0,14],tema:17,temelj:13,test:[0,1,14],testiranja:0,text:[4,15],than:[4,6,14],thei:15,them:[0,4,14],thi:[0,1,2,3,4,6,14,15],think:0,third:[1,14],those:[2,4,15],though:4,thread:4,through:0,thrown:0,thu:[2,4],tim:17,time:[0,4,17],timeout:[1,4,14],tip:[0,1,3,4],titl:[0,2,15],tocaka:17,tock:17,tockama:17,todo:0,tog:0,token:[0,17],tokenu:0,tome:17,top:15,topic:0,tradicionalnih:17,translat:0,treba:[0,1],trebao:0,trebat:17,trenutni:13,trenutno:13,tri:0,trick:0,trigger:4,trivial:4,turn:[0,2,4],turnaround:0,tutori:[0,6],tutorijala:17,tutorijali:17,tvornica:0,twitter:15,two:[0,4,15],type:[0,3,6,14],ucenja:17,ukoliko:[0,16,17],umjetn:17,unabl:4,undefin:2,under:15,uniform:4,uniform_resource_loc:4,unit:0,unless:[14,15],unlik:[0,4,14],upit:0,upload:4,upotrebu:16,upotrijebit:17,upravljaju:17,uri:4,url:[0,1,3,4,6,14,15,17],urlova:17,usag:[0,2,3,4],user:[2,6],uspjesan:1,uspjesnu:1,usual:[0,4,14],uvelik:17,vagrant:[3,4],valu:[1,2,4,14,15],vam:17,var_dump:[3,4],variou:[2,15],vasim:17,vec:17,velik:17,vendor:6,veoma:1,veri:4,version:14,verzija:17,verziju:17,via:[0,4,14],video:4,vidi:[0,16],vimeo:4,vise:[0,17],visual:[4,17],vizualno:17,vote:0,vraca:[0,1,17],vracaju:17,vracati:0,vracenih:17,vrijednost:1,vrijednosti:[1,17],vrijem:1,vrsta:17,vrstu:17,wai:2,walkthrough:0,want:14,web:[0,1,4,17],web_crawl:4,wed:4,what:[0,4],when:[1,2,4,6,14],where:2,whether:4,which:[0,1,4,6,14,15],who:4,why:15,width:4,wiki:15,wikipedia:15,wilcard:6,wildcard:0,without:[0,4,15],won:[4,15],word:[0,1],work:[4,6],would:[4,14],wrapper:17,written:4,www:[0,3,4,17],you:[0,3,4,6,14,15],youll:0,your:15,yourself:4,youtub:0,zadan:0,zadanom:0,zadatka:0,zadavanj:1,zajednick:1,zasebno:1,zasto:[0,13],zelit:17,zlu:13,znate:17,zvati:[0,17]},titles:["Diffbot klasa","API Abstract","Entity Abstract","Analyze API","Article API","Crawl API","Custom API","Discussion API","Image API","Product API","Search API","EntityFactory","EntityIterator","Exceptions (iznimke)","Interfaces","Traits","Dokumentacija za Diffbot PHP klijent","Pregled"],titleterms:{"__call":2,"__construct":[1,2,4,6],"__get":2,"abstract":[1,2],"class":[3,4,5,6,7,8,9,10,12],analyz:3,api:[1,3,4,5,6,7,8,9,10,14],articl:4,brzi:17,buildurl:[1,14],call:[1,14],crawl:[0,5],createanalyzeapi:0,createappropriateiter:14,createarticleapi:0,createcustomapi:0,creatediscussionapi:0,createimageapi:0,createproductapi:0,custom:6,diffbot:[0,16,17],diffbotawar:15,diffbotexcept:13,diffbotov:17,discuss:7,dokumentacija:16,entiti:[2,4,6],entityfactori:[11,14],entityiter:12,except:13,getauthor:4,getbreadcrumb:15,getdat:4,getdata:2,getdiscuss:4,getentityfactori:0,gethtml:4,gethttpclient:0,gethumanlanguag:15,getimag:4,getlang:15,getlink:15,getmeta:15,getnextpag:4,getnumpag:4,getpageurl:15,getquerystr:15,getresolvedpageurl:15,getsenti:4,gettag:4,gettext:4,gettitl:15,gettoken:0,gettyp:4,getvideo:4,imag:8,interfac:14,iznimk:13,jobcrawl:5,klasa:0,klijent:[16,17],linkovi:17,maintoc:16,php:[16,17],pocetak:17,pregl:17,product:9,registerdiffbot:15,search:[0,10],setbreadcrumb:15,setdiscuss:[3,4],setentityfactori:0,sethttpclient:0,setlink:15,setmaxtag:4,setmeta:15,setmod:3,setpag:4,setquerystr:15,setsenti:4,settimeout:[1,14],settoken:0,standardapi:15,standardent:15,trait:15,wildcard:6}})