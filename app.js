const people=["אני","אמא","אחות","מיכאל","אלכס","מרינה","דוד","סשה"];
const I={
he:{
title:"סוף שבוע משפחתי בצפון",subtitle:"שישי עד ראשון · תכנון משותף למשפחה",
organizer:"מארגן/ת",participant:"משתתף/ת",home:"בית",schedule:"לוח זמנים",scheduleShort:"לו״ז",meals:"ארוחות ותפריט",mealsShort:"ארוחות",tasks:"אחריות ומשימות",tasksShort:"משימות",bring:"מה להביא",bringShort:"להביא",cars:"הגעה ועזיבה",carsShort:"רכבים",
participants:"משתתפים",confirmed:"מאושרים",openTasks:"משימות פתוחות",needAttention:"דורשות טיפול",unassignedItems:"פריטים ללא אחראי",bringList:"ברשימת ההבאה",rideRequests:"בקשות לטרמפ",transport:"בהסעות",
nextActivities:"הפעילויות הקרובות",nextActivitiesSub:"מה קורה ומי אחראי",attention:"דורש תשומת לב",attentionSub:"פערים שעדיין לא נסגרו",
scheduleSub:"תאריך, שעה, פעילות, אחראי והערות",mealsSub:"ארוחה, מנות, כמויות, אחראי והערות",tasksSub:"מי מכין, מביא ומארגן",bringSub:"ציוד, אוכל ופריטים משותפים",carsSub:"רכבים, מושבים וטרמפים",
add:"הוספה",all:"הכול",allDays:"כל הימים",open:"פתוחות",done:"הושלמו",unassigned:"ללא אחראי",mine:"רק שלי",ready:"כבר מוכן",
confirmedStatus:"מאושר",proposed:"מוצע",inProgress:"בטיפול",completed:"הושלם",notReady:"לא מוכן",responsible:"באחריות",needsRide:"צריך/ה טרמפ",arrival:"הגעה",departure:"עזיבה",
claimTask:"אני לוקח/ת",claimBring:"אני מביא/ה",markDone:"סימון כהושלם",reopen:"פתיחה מחדש",markReady:"מוכן",delete:"מחיקה",
activeCoordinator:"מארגן/ת פעיל/ה",handoverSub:"אפשר להעביר את האחריות בלי לשנות את שאר המארגנים",currentCoordinator:"אחראי/ת כרגע",handover:"העברת אחריות",handoverDone:"האחריות הפעילה הועברה אל",
organizerMode:"מצב מארגן: ניתן לערוך את כל התוכן.",participantMode:"מצב משתתף: ניתן לקחת משימות, להוסיף פריטים ולעדכן נסיעה.",
noOwner:"ללא אחראי",nothingOpen:"אין פערים פתוחים",noPassengers:"אין נוסעים משובצים",seats:"מושבים",dishes:"מנות",quantity:"כמות",notes:"הערות",day:"יום",time:"שעה",activity:"פעילות",owner:"אחראי",status:"סטטוס",category:"קטגוריה",item:"פריט",meal:"ארוחה",driver:"שם",type:"סוג",direction:"כיוון",origin:"מוצא",freeSeats:"מושבים פנויים",save:"שמירה",
Friday:"שישי",Saturday:"שבת",Sunday:"ראשון",breakfast:"ארוחת בוקר",lunch:"ארוחת צהריים",dinner:"ארוחת ערב",snacks:"נשנושים"
},
en:{
title:"Family Weekend in Northern Israel",subtitle:"Friday to Sunday · Shared family planning",
organizer:"Organizer",participant:"Participant",home:"Home",schedule:"Schedule",scheduleShort:"Schedule",meals:"Meals & menu",mealsShort:"Meals",tasks:"Responsibilities & tasks",tasksShort:"Tasks",bring:"What to bring",bringShort:"Bring",cars:"Arrival & departure",carsShort:"Cars",
participants:"Participants",confirmed:"confirmed",openTasks:"Open tasks",needAttention:"need attention",unassignedItems:"Unassigned items",bringList:"on bring list",rideRequests:"Ride requests",transport:"transport",
nextActivities:"Next activities",nextActivitiesSub:"What happens and who owns it",attention:"Needs attention",attentionSub:"Items still unresolved",
scheduleSub:"Date, time, activity, owner and notes",mealsSub:"Meal, dishes, quantities, owner and notes",tasksSub:"Who prepares, brings and organizes",bringSub:"Equipment, food and shared items",carsSub:"Cars, seats and rides",
add:"Add",all:"All",allDays:"All days",open:"Open",done:"Completed",unassigned:"Unassigned",mine:"Only mine",ready:"Already ready",
confirmedStatus:"Confirmed",proposed:"Proposed",inProgress:"In progress",completed:"Completed",notReady:"Not ready",responsible:"Assigned",needsRide:"Needs a ride",arrival:"Arrival",departure:"Departure",
claimTask:"I'll take it",claimBring:"I'll bring it",markDone:"Mark completed",reopen:"Reopen",markReady:"Ready",delete:"Delete",
activeCoordinator:"Active coordinator",handoverSub:"Transfer active responsibility without removing other organizers",currentCoordinator:"Currently responsible",handover:"Transfer responsibility",handoverDone:"Active responsibility transferred to",
organizerMode:"Organizer mode: full editing is enabled.",participantMode:"Participant mode: claim tasks, add items and update travel details.",
noOwner:"Unassigned",nothingOpen:"Nothing unresolved",noPassengers:"No passengers assigned",seats:"Seats",dishes:"Dishes",quantity:"Quantity",notes:"Notes",day:"Day",time:"Time",activity:"Activity",owner:"Owner",status:"Status",category:"Category",item:"Item",meal:"Meal",driver:"Name",type:"Type",direction:"Direction",origin:"Origin",freeSeats:"Free seats",save:"Save",
Friday:"Friday",Saturday:"Saturday",Sunday:"Sunday",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snacks:"Snacks"
},
ru:{
title:"Семейные выходные на севере Израиля",subtitle:"С пятницы по воскресенье · Совместное планирование",
organizer:"Организатор",participant:"Участник",home:"Главная",schedule:"Расписание",scheduleShort:"План",meals:"Еда и меню",mealsShort:"Еда",tasks:"Обязанности и задачи",tasksShort:"Задачи",bring:"Что взять",bringShort:"Взять",cars:"Прибытие и отъезд",carsShort:"Машины",
participants:"Участники",confirmed:"подтверждено",openTasks:"Открытые задачи",needAttention:"требуют внимания",unassignedItems:"Без ответственного",bringList:"в списке вещей",rideRequests:"Нужен транспорт",transport:"транспорт",
nextActivities:"Ближайшие мероприятия",nextActivitiesSub:"Что происходит и кто отвечает",attention:"Требует внимания",attentionSub:"Нерешённые вопросы",
scheduleSub:"Дата, время, мероприятие, ответственный и заметки",mealsSub:"Приём пищи, блюда, количество, ответственный и заметки",tasksSub:"Кто готовит, приносит и организует",bringSub:"Оборудование, еда и общие вещи",carsSub:"Машины, места и поездки",
add:"Добавить",all:"Все",allDays:"Все дни",open:"Открытые",done:"Завершено",unassigned:"Без ответственного",mine:"Только мои",ready:"Уже готово",
confirmedStatus:"Подтверждено",proposed:"Предложено",inProgress:"В работе",completed:"Готово",notReady:"Не готово",responsible:"Назначено",needsRide:"Нужна поездка",arrival:"Прибытие",departure:"Отъезд",
claimTask:"Я беру",claimBring:"Я принесу",markDone:"Отметить готовым",reopen:"Открыть снова",markReady:"Готово",delete:"Удалить",
activeCoordinator:"Активный координатор",handoverSub:"Можно передать текущую ответственность, сохранив остальных организаторов",currentCoordinator:"Сейчас отвечает",handover:"Передать ответственность",handoverDone:"Активная ответственность передана:",
organizerMode:"Режим организатора: доступно полное редактирование.",participantMode:"Режим участника: можно брать задачи, добавлять вещи и обновлять поездку.",
noOwner:"Без ответственного",nothingOpen:"Нерешённых вопросов нет",noPassengers:"Пассажиры не назначены",seats:"Места",dishes:"Блюда",quantity:"Количество",notes:"Заметки",day:"День",time:"Время",activity:"Мероприятие",owner:"Ответственный",status:"Статус",category:"Категория",item:"Предмет",meal:"Приём пищи",driver:"Имя",type:"Тип",direction:"Направление",origin:"Откуда",freeSeats:"Свободные места",save:"Сохранить",
Friday:"Пятница",Saturday:"Суббота",Sunday:"Воскресенье",breakfast:"Завтрак",lunch:"Обед",dinner:"Ужин",snacks:"Закуски"
}};
let lang="he",role="organizer",currentUser="אני";
const state=JSON.parse(localStorage.getItem("familyWeekendV2")||"null")||{
participantCount:18,activeCoordinator:"אני",handoverAt:"",
schedule:[
{id:1,day:"Friday",time:"08:30",title:"יציאה מהבית",owner:"",status:"confirmed",notes:""},
{id:2,day:"Friday",time:"10:30",title:"הגעה לכפר בלום",owner:"אמא",status:"confirmed",notes:""},
{id:3,day:"Friday",time:"11:00",title:"מסלול קייקים",owner:"אחות",status:"confirmed",notes:""},
{id:4,day:"Friday",time:"16:00",title:"הכנה לארוחת ערב",owner:"",status:"proposed",notes:""},
{id:5,day:"Friday",time:"20:00",title:"אייטם תוכן",owner:"",status:"proposed",notes:""},
{id:6,day:"Saturday",time:"10:00",title:"ארוחת בוקר",owner:"",status:"confirmed",notes:""},
{id:7,day:"Saturday",time:"11:00",title:"יציאה לסיבוב, טיול רגלי",owner:"",status:"proposed",notes:""},
{id:8,day:"Saturday",time:"18:30",title:"ערוכת ערב",owner:"",status:"proposed",notes:""},
{id:9,day:"Sunday",time:"09:30",title:"השכמות",owner:"",status:"confirmed",notes:""},
{id:10,day:"Sunday",time:"11:30",title:"קיפולים",owner:"",status:"proposed",notes:""},
{id:11,day:"Sunday",time:"12:00",title:"צ׳ק אאוט",owner:"אמא",status:"confirmed",notes:""}
],
meals:[
{id:101,day:"Friday",mealType:"dinner",title:"ארוחת ערב שישי",dishes:"בשר על האש, מרגזים, בצל, סלט, שמן זית, לימון, מלח, תבלינים",quantity:"",owner:"",notes:""},
{id:102,day:"Saturday",mealType:"breakfast",title:"ארוחת שבת בוקר",dishes:"ג׳חנון, ביצים קשות, רוטב עגבניות, סלט",quantity:"20",owner:"אולגה",notes:"אולגה תזמין במכולת ותכין בתנור"},
{id:103,day:"Saturday",mealType:"snacks",title:"נשנושים לשבת צהריים",dishes:"לחם/טורטיות, גבינות, פסטרמות, סלט",quantity:"",owner:"",notes:""},
{id:104,day:"Saturday",mealType:"dinner",title:"ארוחת ערב שבת",dishes:"",quantity:"",owner:"",notes:""}
],
tasks:[
{id:21,title:"לבחור ולהכין משחק לערב שישי",owner:"",category:"פעילות",done:false},
{id:22,title:"לקנות פחמים וכלי מנגל",owner:"מיכאל",category:"אוכל",done:false},
{id:23,title:"לאשר שעת כניסה למקום",owner:"אמא",category:"לוגיסטיקה",done:true},
{id:24,title:"להכין פלייליסט ורמקול",owner:"אלכס",category:"ציוד",done:false}
],
bring:[
{id:31,title:"רמקול נייד",owner:"אלכס",category:"ציוד",done:false},
{id:32,title:"ערכת עזרה ראשונה",owner:"",category:"ציוד",done:false},
{id:33,title:"שתייה קלה ומים",owner:"מרינה",category:"אוכל",done:false},
{id:34,title:"משחקי קופסה",owner:"",category:"פעילות",done:false}
],
cars:[
{id:41,driver:"מיכאל",direction:"arrival",day:"Friday",time:"12:30",origin:"חולון",seats:3,passengers:["אני","אחות"],needRide:false},
{id:42,driver:"מרינה",direction:"arrival",day:"Friday",time:"15:00",origin:"תל אביב",seats:2,passengers:[],needRide:false},
{id:43,driver:"סשה",direction:"departure",day:"Sunday",time:"10:30",origin:"הצפון",seats:2,passengers:["דוד"],needRide:false},
{id:44,driver:"דוד",direction:"arrival",day:"Friday",time:"14:00",origin:"ראשון לציון",seats:0,passengers:[],needRide:true}
]};
const t=k=>I[lang][k]||k; const save=()=>localStorage.setItem("familyWeekendV2",JSON.stringify(state));
function opts(values,selected){return values.map(([v,l])=>`<option value="${v}" ${v===selected?"selected":""}>${l}</option>`).join("")}
function setStatic(){
document.documentElement.lang=lang;document.documentElement.dir=lang==="he"?"rtl":"ltr";
document.getElementById("appTitle").textContent=t("title");document.getElementById("appSubtitle").textContent=t("subtitle");
document.querySelectorAll("[data-k]").forEach(e=>e.textContent=t(e.dataset.k));
roleSelect.innerHTML=opts([["organizer",t("organizer")],["guest",t("participant")]],role);
dayFilter.innerHTML=opts([["all",t("allDays")],["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],dayFilter.value||"all");
mealDayFilter.innerHTML=opts([["all",t("allDays")],["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],mealDayFilter.value||"all");
taskFilter.innerHTML=opts([["all",t("all")],["open",t("open")],["done",t("done")],["unassigned",t("unassigned")]],taskFilter.value||"all");
bringFilter.innerHTML=opts([["all",t("all")],["mine",t("mine")],["unassigned",t("unassigned")],["done",t("ready")]],bringFilter.value||"all");
coordinatorSelect.innerHTML=people.map(p=>`<option ${p===state.activeCoordinator?"selected":""}>${p}</option>`).join("");
render();
}
const dayName=d=>t(d), ownerText=o=>o||t("noOwner"), statusText=s=>s==="confirmed"?t("confirmedStatus"):s==="done"?t("completed"):s==="warn"?t("needAttention"):t("proposed");
function render(){
modeNotice.textContent=role==="organizer"?t("organizerMode"):t("participantMode");
document.querySelectorAll(".organizer-only").forEach(e=>e.style.display=role==="organizer"?"":"none");
participantCount.textContent=state.participantCount;openTasks.textContent=state.tasks.filter(x=>!x.done).length;unassignedItems.textContent=state.bring.filter(x=>!x.owner).length;rideRequests.textContent=state.cars.filter(x=>x.needRide).length;
handoverNote.textContent=state.handoverAt?`${t("handoverDone")} ${state.activeCoordinator} · ${state.handoverAt}`:`${t("currentCoordinator")}: ${state.activeCoordinator}`;
renderSchedule();renderMeals();renderTasks();renderBring();renderCars();renderHome();
}
function compact(title,meta,owner,status){return `<div class="item"><div class="item-top"><div><h3>${title}</h3><div class="meta"><span>${meta}</span><span>${owner}</span></div></div><span class="badge ${status==="warn"?"warn":status==="done"?"done":""}">${statusText(status)}</span></div></div>`}
function renderHome(){
nextActivities.innerHTML=state.schedule.slice(0,3).map(x=>compact(x.title,`${dayName(x.day)} ${x.time}`,ownerText(x.owner),x.status)).join("");
let a=[];state.tasks.filter(x=>!x.owner&&!x.done).forEach(x=>a.push(compact(x.title,x.category,ownerText(x.owner),"warn")));state.bring.filter(x=>!x.owner&&!x.done).forEach(x=>a.push(compact(x.title,x.category,ownerText(x.owner),"warn")));state.cars.filter(x=>x.needRide).forEach(x=>a.push(compact(`${x.driver} — ${t("needsRide")}`,`${dayName(x.day)} ${x.time}`,x.origin,"warn")));
attentionList.innerHTML=a.length?a.join(""):`<div class="empty">${t("nothingOpen")}</div>`;
}
function renderSchedule(){
let f=dayFilter.value||"all";let rows=state.schedule.filter(x=>f==="all"||x.day===f);
scheduleList.innerHTML=rows.map(x=>`<div class="item"><div class="item-top"><div><h3>${x.title}</h3><div class="meta"><span>${dayName(x.day)} · ${x.time}</span><span>${ownerText(x.owner)}</span></div><div class="meta">${x.notes||""}</div></div><span class="badge">${statusText(x.status)}</span></div>${role==="organizer"?`<div class="actions"><button class="btn danger" data-delete="schedule" data-id="${x.id}">${t("delete")}</button></div>`:""}</div>`).join("");
}
function renderMeals(){
let f=mealDayFilter.value||"all";let rows=state.meals.filter(x=>f==="all"||x.day===f);
mealsList.innerHTML=rows.map(x=>`<div class="card"><div class="item-top"><div><h3>${x.title}</h3><div class="meta"><span>${dayName(x.day)}</span><span>${t(x.mealType)}</span><span>${ownerText(x.owner)}</span></div></div><span class="badge">${x.quantity?`${t("quantity")}: ${x.quantity}`:t("proposed")}</span></div><div style="margin-top:10px"><strong>${t("dishes")}:</strong> ${x.dishes||"—"}</div>${x.notes?`<div class="meta" style="margin-top:8px">${x.notes}</div>`:""}${role==="organizer"?`<div class="actions"><button class="btn danger" data-delete="meal" data-id="${x.id}">${t("delete")}</button></div>`:""}</div>`).join("");
}
function renderTasks(){
let f=taskFilter.value||"all";let rows=state.tasks.filter(x=>f==="all"||(f==="open"&&!x.done)||(f==="done"&&x.done)||(f==="unassigned"&&!x.owner));
taskList.innerHTML=rows.map(x=>`<div class="item"><div class="item-top"><div><h3>${x.title}</h3><div class="meta"><span>${x.category}</span><span>${ownerText(x.owner)}</span></div></div><span class="badge ${x.done?"done":!x.owner?"warn":""}">${x.done?t("completed"):!x.owner?t("unassigned"):t("inProgress")}</span></div><div class="actions">${!x.owner&&!x.done?`<button class="btn" data-claim="task" data-id="${x.id}">${t("claimTask")}</button>`:""}<button class="btn" data-toggle="task" data-id="${x.id}">${x.done?t("reopen"):t("markDone")}</button>${role==="organizer"?`<button class="btn danger" data-delete="task" data-id="${x.id}">${t("delete")}</button>`:""}</div></div>`).join("");
}
function renderBring(){
let f=bringFilter.value||"all";let rows=state.bring.filter(x=>f==="all"||(f==="mine"&&x.owner===currentUser)||(f==="unassigned"&&!x.owner)||(f==="done"&&x.done));
bringListEl.innerHTML=rows.map(x=>`<div class="item"><div class="item-top"><div><h3>${x.title}</h3><div class="meta"><span>${x.category}</span><span>${ownerText(x.owner)}</span></div></div><span class="badge ${x.done?"done":!x.owner?"warn":""}">${x.done?t("completed"):!x.owner?t("unassigned"):t("responsible")}</span></div><div class="actions">${!x.owner?`<button class="btn" data-claim="bring" data-id="${x.id}">${t("claimBring")}</button>`:""}<button class="btn" data-toggle="bring" data-id="${x.id}">${x.done?t("notReady"):t("markReady")}</button>${role==="organizer"?`<button class="btn danger" data-delete="bring" data-id="${x.id}">${t("delete")}</button>`:""}</div></div>`).join("");
}
function renderCars(){
carsList.innerHTML=state.cars.map(x=>{let used=x.passengers.length,p=x.seats?Math.min(100,used/x.seats*100):0;return `<div class="card"><div class="item-top"><div><h3>${x.needRide?"🚕 ":"🚗 "}${x.driver}</h3><div class="meta"><span>${dayName(x.day)} ${x.time}</span><span>${x.origin}</span></div></div><span class="badge ${x.needRide?"warn":""}">${x.needRide?t("needsRide"):t(x.direction)}</span></div>${!x.needRide?`<div class="meta" style="margin-top:10px">${t("seats")}: ${used}/${x.seats}</div><div class="seatbar"><span style="width:${p}%"></span></div><div class="meta" style="margin-top:8px">${x.passengers.join(", ")||t("noPassengers")}</div>`:""}${role==="organizer"?`<div class="actions"><button class="btn danger" data-delete="car" data-id="${x.id}">${t("delete")}</button></div>`:""}</div>`}).join("");
}
function peopleOpts(blank=true){return `${blank?`<option value="">${t("noOwner")}</option>`:""}${people.map(p=>`<option>${p}</option>`).join("")}`}
function openForm(type){
modalTitle.textContent=t("add");let c=formContainer;
if(type==="schedule")c.innerHTML=`<div class="form-grid"><label>${t("day")}<select id="fDay">${opts([["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],"Friday")}</select></label><label>${t("time")}<input id="fTime" class="input" type="time"></label><label class="full">${t("activity")}<input id="fTitle" class="input"></label><label>${t("owner")}<select id="fOwner">${peopleOpts()}</select></label><label>${t("status")}<select id="fStatus">${opts([["confirmed",t("confirmedStatus")],["proposed",t("proposed")]],"confirmed")}</select></label><label class="full">${t("notes")}<textarea id="fNotes" class="textarea"></textarea></label><button class="btn primary full" id="saveForm">${t("save")}</button></div>`;
if(type==="meal")c.innerHTML=`<div class="form-grid"><label>${t("day")}<select id="fDay">${opts([["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],"Friday")}</select></label><label>${t("meal")}<select id="fMealType">${opts([["breakfast",t("breakfast")],["lunch",t("lunch")],["dinner",t("dinner")],["snacks",t("snacks")]],"dinner")}</select></label><label class="full">${t("meal")}<input id="fTitle" class="input"></label><label class="full">${t("dishes")}<textarea id="fDishes" class="textarea"></textarea></label><label>${t("quantity")}<input id="fQuantity" class="input"></label><label>${t("owner")}<select id="fOwner">${peopleOpts()}</select></label><label class="full">${t("notes")}<textarea id="fNotes" class="textarea"></textarea></label><button class="btn primary full" id="saveForm">${t("save")}</button></div>`;
if(type==="task")c.innerHTML=`<div class="form-grid"><label class="full">${t("activity")}<input id="fTitle" class="input"></label><label>${t("category")}<input id="fCategory" class="input"></label><label>${t("owner")}<select id="fOwner">${peopleOpts()}</select></label><button class="btn primary full" id="saveForm">${t("save")}</button></div>`;
if(type==="bring")c.innerHTML=`<div class="form-grid"><label class="full">${t("item")}<input id="fTitle" class="input"></label><label>${t("category")}<input id="fCategory" class="input"></label><label>${t("owner")}<select id="fOwner">${peopleOpts()}</select></label><button class="btn primary full" id="saveForm">${t("save")}</button></div>`;
if(type==="car")c.innerHTML=`<div class="form-grid"><label>${t("driver")}<select id="fDriver">${peopleOpts(false)}</select></label><label>${t("type")}<select id="fNeedRide">${opts([["false",t("responsible")],["true",t("needsRide")]],"false")}</select></label><label>${t("direction")}<select id="fDirection">${opts([["arrival",t("arrival")],["departure",t("departure")]],"arrival")}</select></label><label>${t("day")}<select id="fDay">${opts([["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],"Friday")}</select></label><label>${t("time")}<input id="fTime" class="input" type="time"></label><label>${t("origin")}<input id="fOrigin" class="input"></label><label>${t("freeSeats")}<input id="fSeats" class="input" type="number" min="0" value="3"></label><button class="btn primary full" id="saveForm">${t("save")}</button></div>`;
modal.classList.add("open");saveForm.addEventListener("click",()=>commit(type));
}
function commit(type){
let id=Date.now();
if(type==="schedule")state.schedule.push({id,day:fDay.value,time:fTime.value,title:fTitle.value,owner:fOwner.value,status:fStatus.value,notes:fNotes.value});
if(type==="meal")state.meals.push({id,day:fDay.value,mealType:fMealType.value,title:fTitle.value,dishes:fDishes.value,quantity:fQuantity.value,owner:fOwner.value,notes:fNotes.value});
if(type==="task")state.tasks.push({id,title:fTitle.value,category:fCategory.value,owner:fOwner.value,done:false});
if(type==="bring")state.bring.push({id,title:fTitle.value,category:fCategory.value,owner:fOwner.value,done:false});
if(type==="car")state.cars.push({id,driver:fDriver.value,direction:fDirection.value,day:fDay.value,time:fTime.value,origin:fOrigin.value,seats:Number(fSeats.value||0),passengers:[],needRide:fNeedRide.value==="true"});
save();modal.classList.remove("open");render();
}
document.addEventListener("click",e=>{
let tab=e.target.closest(".tab");if(tab){document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));document.getElementById(tab.dataset.view+"View").classList.add("active")}
let op=e.target.closest("[data-open]");if(op)openForm(op.dataset.open);
let d=e.target.closest("[data-delete]");if(d){let map={schedule:"schedule",meal:"meals",task:"tasks",bring:"bring",car:"cars"},k=map[d.dataset.delete];state[k]=state[k].filter(x=>x.id!=d.dataset.id);save();render()}
let c=e.target.closest("[data-claim]");if(c){let arr=c.dataset.claim==="task"?state.tasks:state.bring, x=arr.find(i=>i.id==c.dataset.id);x.owner=currentUser;save();render()}
let g=e.target.closest("[data-toggle]");if(g){let arr=g.dataset.toggle==="task"?state.tasks:state.bring,x=arr.find(i=>i.id==g.dataset.id);x.done=!x.done;save();render()}
});
handoverBtn.addEventListener("click",()=>{state.activeCoordinator=coordinatorSelect.value;state.handoverAt=new Date().toLocaleString();save();render()});
closeModal.addEventListener("click",()=>modal.classList.remove("open"));modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
roleSelect.addEventListener("change",e=>{role=e.target.value;render()});langSelect.addEventListener("change",e=>{lang=e.target.value;setStatic()});
dayFilter.addEventListener("change",renderSchedule);mealDayFilter.addEventListener("change",renderMeals);taskFilter.addEventListener("change",renderTasks);bringFilter.addEventListener("change",renderBring);
setStatic();

