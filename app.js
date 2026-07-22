(function () {
  "use strict";

  // Public mode can be simulated locally with ?public=1. It never enables editing on a public host.
  const localHost = location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:";
  const isLocalEditor = localHost && new URLSearchParams(location.search).get("public") !== "1";
  window.isLocalEditor = isLocalEditor;
  const STORAGE_KEY = "familyWeekendV2";

  const I = {
    en: {
      title:"Family Weekend in Northern Israel",subtitle:"Friday to Sunday · Shared family planning",home:"Home",schedule:"Schedule",scheduleShort:"Schedule",meals:"Meals & menu",mealsShort:"Meals",tasks:"Responsibilities & tasks",tasksShort:"Tasks",bring:"What to bring",bringShort:"Bring",cars:"Arrival & departure",carsShort:"Cars",
      participants:"Participants",confirmed:"confirmed",openTasks:"Open tasks",needAttention:"need attention",unassignedItems:"Unassigned items",bringList:"on bring list",rideRequests:"Ride requests",transport:"transport",nextActivities:"Next activities",nextActivitiesSub:"What happens and who owns it",attention:"Needs attention",attentionSub:"Items still unresolved",
      scheduleSub:"Date, time, activity, owner and notes",mealsSub:"Meal, dishes, quantities, owner and notes",tasksSub:"Who prepares, brings and organizes",bringSub:"Equipment, food and shared items",carsSub:"Cars, seats and rides",add:"Add",edit:"Edit",delete:"Delete",save:"Save",cancel:"Cancel",all:"All",allDays:"All days",open:"Open",done:"Completed",unassigned:"Unassigned",ready:"Ready",
      confirmedStatus:"Confirmed",proposed:"Proposed",inProgress:"In progress",completed:"Completed",notReady:"Not ready",responsible:"Assigned",needsRide:"Needs a ride",arrival:"Arrival",departure:"Departure",noOwner:"Unassigned",nothingOpen:"Nothing unresolved",noPassengers:"No passengers assigned",seats:"Passenger capacity",dishes:"Dishes / details",quantity:"Quantity",notes:"Notes",day:"Date / day",startTime:"Start time",endTime:"End time",time:"Time",activity:"Title",owner:"Responsible",status:"Status",category:"Category",item:"Item",meal:"Meal",driver:"Driver",type:"Type",direction:"Journey",origin:"Origin",passengers:"Passengers",deadline:"Date / deadline",
      Friday:"Friday",Saturday:"Saturday",Sunday:"Sunday",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snacks:"Snacks",localMode:"Local editable version",publicMode:"Read-only version",activeCoordinator:"Current coordinator",handoverSub:"The person currently coordinating this trip",currentCoordinator:"Coordinator",saveCoordinator:"Save coordinator",
      organizerTools:"Organizer tools",localEditorHint:"Changes save automatically in this browser.",eventSettings:"Event settings",manageParticipants:"Manage participants",exportWebsite:"Export for website",exportBackup:"Export backup",importBackup:"Import backup",copySummary:"Copy WhatsApp summary",shareSummary:"Share summary",shareSummarySub:"Copy or share a concise trip update.",
      eventTitle:"Event title",eventSubtitle:"Subtitle",startDate:"Start date",endDate:"End date",location:"Location",generalNotes:"General event notes",participantName:"Participant name",addParticipant:"Add participant",moveUp:"Move up",moveDown:"Move down",remove:"Remove",
      emptyParticipants:"No participants yet.",emptySchedule:"No activities match this view.",emptyMeals:"No meals match this view.",emptyTasks:"No tasks match this view.",emptyBring:"No bring-list items match this view.",emptyCars:"No cars or journeys yet.",emptyPassengers:"No passengers assigned.",
      deleteConfirm:"Delete “{name}”? This cannot be undone.",removeParticipantConfirm:"Remove “{name}”? Related assignments will be cleared.",invalidData:"The saved/imported data is invalid. Your current information was kept.",storageError:"Changes could not be saved in this browser.",requiredTitle:"Please enter a title or name.",importConfirm:"Replace all current event information with this backup?",imported:"Backup imported successfully.",exported:"Backup downloaded.",copied:"Summary copied.",shareUnavailable:"Sharing is not supported here. The summary was copied instead.",publicBlocked:"This read-only version cannot change event information.",
      publishInstructions:"published-data.js downloaded.\n1. Replace the old published-data.js in the project folder.\n2. Commit the change.\n3. Push it to GitHub.\n4. Refresh the GitHub Pages website.",capacityWarning:"Too many passengers: {used} assigned for {seats} seats.",duplicateWarning:"{name} is assigned to more than one {direction} journey.",driverPassengerWarning:"Driver is also listed as a passenger.",notAssignedWarning:"Not assigned: {names}",dataRecovered:"Stored data was invalid, so safe default data is shown. The damaged value was not overwritten.",yes:"Yes",no:"No"
    },
    he: {
      title:"סוף שבוע משפחתי בצפון",subtitle:"שישי עד ראשון · תכנון משותף למשפחה",home:"בית",schedule:"לוח זמנים",scheduleShort:"לו״ז",meals:"ארוחות ותפריט",mealsShort:"ארוחות",tasks:"אחריות ומשימות",tasksShort:"משימות",bring:"מה להביא",bringShort:"להביא",cars:"הגעה ועזיבה",carsShort:"רכבים",participants:"משתתפים",confirmed:"מאושרים",openTasks:"משימות פתוחות",needAttention:"דורשות טיפול",unassignedItems:"פריטים ללא אחראי",bringList:"ברשימת ההבאה",rideRequests:"בקשות לטרמפ",transport:"בהסעות",nextActivities:"הפעילויות הקרובות",nextActivitiesSub:"מה קורה ומי אחראי",attention:"דורש תשומת לב",attentionSub:"פערים שעדיין לא נסגרו",scheduleSub:"תאריך, שעה, פעילות, אחראי והערות",mealsSub:"ארוחה, מנות, כמויות, אחראי והערות",tasksSub:"מי מכין, מביא ומארגן",bringSub:"ציוד, אוכל ופריטים משותפים",carsSub:"רכבים, מושבים וטרמפים",add:"הוספה",edit:"עריכה",delete:"מחיקה",save:"שמירה",cancel:"ביטול",all:"הכול",allDays:"כל הימים",open:"פתוחות",done:"הושלמו",unassigned:"ללא אחראי",ready:"מוכן",confirmedStatus:"מאושר",proposed:"מוצע",inProgress:"בטיפול",completed:"הושלם",notReady:"לא מוכן",responsible:"באחריות",needsRide:"צריך/ה טרמפ",arrival:"הגעה",departure:"עזיבה",noOwner:"ללא אחראי",nothingOpen:"אין פערים פתוחים",noPassengers:"אין נוסעים משובצים",seats:"קיבולת נוסעים",dishes:"מנות / פרטים",quantity:"כמות",notes:"הערות",day:"תאריך / יום",startTime:"שעת התחלה",endTime:"שעת סיום",time:"שעה",activity:"כותרת",owner:"אחראי",status:"סטטוס",category:"קטגוריה",item:"פריט",meal:"ארוחה",driver:"נהג/ת",type:"סוג",direction:"נסיעה",origin:"מוצא",passengers:"נוסעים",deadline:"תאריך / יעד",Friday:"שישי",Saturday:"שבת",Sunday:"ראשון",breakfast:"ארוחת בוקר",lunch:"ארוחת צהריים",dinner:"ארוחת ערב",snacks:"נשנושים",localMode:"גרסה מקומית לעריכה",publicMode:"גרסה לקריאה בלבד",activeCoordinator:"מארגן/ת נוכחי/ת",handoverSub:"האדם שמתאם כרגע את הטיול",currentCoordinator:"מתאם/ת",saveCoordinator:"שמירת מתאם/ת",organizerTools:"כלי מארגן",localEditorHint:"השינויים נשמרים אוטומטית בדפדפן הזה.",eventSettings:"הגדרות האירוע",manageParticipants:"ניהול משתתפים",exportWebsite:"ייצוא לאתר",exportBackup:"ייצוא גיבוי",importBackup:"ייבוא גיבוי",copySummary:"העתקת סיכום לוואטסאפ",shareSummary:"שיתוף סיכום",shareSummarySub:"העתקה או שיתוף של עדכון קצר על הטיול.",eventTitle:"שם האירוע",eventSubtitle:"כותרת משנה",startDate:"תאריך התחלה",endDate:"תאריך סיום",location:"מיקום",generalNotes:"הערות כלליות",participantName:"שם המשתתף",addParticipant:"הוספת משתתף",moveUp:"למעלה",moveDown:"למטה",remove:"הסרה",emptyParticipants:"אין משתתפים עדיין.",emptySchedule:"אין פעילויות בתצוגה זו.",emptyMeals:"אין ארוחות בתצוגה זו.",emptyTasks:"אין משימות בתצוגה זו.",emptyBring:"אין פריטים בתצוגה זו.",emptyCars:"אין רכבים או נסיעות.",emptyPassengers:"אין נוסעים משובצים.",deleteConfirm:"למחוק את „{name}”? לא ניתן לבטל פעולה זו.",removeParticipantConfirm:"להסיר את „{name}”? שיוכים קשורים ינוקו.",invalidData:"הנתונים שנשמרו או יובאו אינם תקינים. המידע הנוכחי נשמר.",storageError:"לא ניתן לשמור שינויים בדפדפן הזה.",requiredTitle:"יש להזין כותרת או שם.",importConfirm:"להחליף את כל פרטי האירוע בגיבוי זה?",imported:"הגיבוי יובא בהצלחה.",exported:"הגיבוי הורד.",copied:"הסיכום הועתק.",shareUnavailable:"השיתוף אינו נתמך כאן. הסיכום הועתק במקום.",publicBlocked:"בגרסה לקריאה בלבד אי אפשר לשנות מידע.",publishInstructions:"הקובץ published-data.js הורד.\n1. החליפו את הקובץ הישן בתיקיית הפרויקט.\n2. בצעו Commit.\n3. בצעו Push ל-GitHub.\n4. רעננו את אתר GitHub Pages.",capacityWarning:"יותר מדי נוסעים: {used} משובצים ל-{seats} מושבים.",duplicateWarning:"{name} משובץ ליותר מנסיעת {direction} אחת.",driverPassengerWarning:"הנהג/ת מופיע/ה גם כנוסע/ת.",notAssignedWarning:"ללא שיבוץ: {names}",dataRecovered:"המידע השמור אינו תקין, ולכן מוצגים נתוני ברירת מחדל בטוחים. הערך הפגום לא נדרס.",yes:"כן",no:"לא"
    },
    ru: {
      title:"Семейные выходные на севере Израиля",subtitle:"С пятницы по воскресенье · Совместное планирование",home:"Главная",schedule:"Расписание",scheduleShort:"План",meals:"Еда и меню",mealsShort:"Еда",tasks:"Обязанности и задачи",tasksShort:"Задачи",bring:"Что взять",bringShort:"Взять",cars:"Прибытие и отъезд",carsShort:"Машины",participants:"Участники",confirmed:"подтверждено",openTasks:"Открытые задачи",needAttention:"требуют внимания",unassignedItems:"Без ответственного",bringList:"в списке вещей",rideRequests:"Нужен транспорт",transport:"транспорт",nextActivities:"Ближайшие мероприятия",nextActivitiesSub:"Что происходит и кто отвечает",attention:"Требует внимания",attentionSub:"Нерешённые вопросы",scheduleSub:"Дата, время, мероприятие, ответственный и заметки",mealsSub:"Приём пищи, блюда, количество и ответственный",tasksSub:"Кто готовит, приносит и организует",bringSub:"Оборудование, еда и общие вещи",carsSub:"Машины, места и поездки",add:"Добавить",edit:"Изменить",delete:"Удалить",save:"Сохранить",cancel:"Отмена",all:"Все",allDays:"Все дни",open:"Открытые",done:"Завершено",unassigned:"Без ответственного",ready:"Готово",confirmedStatus:"Подтверждено",proposed:"Предложено",inProgress:"В работе",completed:"Готово",notReady:"Не готово",responsible:"Назначено",needsRide:"Нужна поездка",arrival:"Прибытие",departure:"Отъезд",noOwner:"Без ответственного",nothingOpen:"Нерешённых вопросов нет",noPassengers:"Пассажиры не назначены",seats:"Вместимость пассажиров",dishes:"Блюда / детали",quantity:"Количество",notes:"Заметки",day:"Дата / день",startTime:"Начало",endTime:"Окончание",time:"Время",activity:"Название",owner:"Ответственный",status:"Статус",category:"Категория",item:"Предмет",meal:"Приём пищи",driver:"Водитель",type:"Тип",direction:"Поездка",origin:"Откуда",passengers:"Пассажиры",deadline:"Дата / срок",Friday:"Пятница",Saturday:"Суббота",Sunday:"Воскресенье",breakfast:"Завтрак",lunch:"Обед",dinner:"Ужин",snacks:"Закуски",localMode:"Локальная редактируемая версия",publicMode:"Версия только для чтения",activeCoordinator:"Текущий координатор",handoverSub:"Человек, который сейчас координирует поездку",currentCoordinator:"Координатор",saveCoordinator:"Сохранить координатора",organizerTools:"Инструменты организатора",localEditorHint:"Изменения автоматически сохраняются в этом браузере.",eventSettings:"Настройки события",manageParticipants:"Управление участниками",exportWebsite:"Экспорт для сайта",exportBackup:"Экспорт копии",importBackup:"Импорт копии",copySummary:"Копировать сводку WhatsApp",shareSummary:"Поделиться сводкой",shareSummarySub:"Скопировать или отправить краткую сводку.",eventTitle:"Название события",eventSubtitle:"Подзаголовок",startDate:"Дата начала",endDate:"Дата окончания",location:"Место",generalNotes:"Общие заметки",participantName:"Имя участника",addParticipant:"Добавить участника",moveUp:"Вверх",moveDown:"Вниз",remove:"Удалить",emptyParticipants:"Участников пока нет.",emptySchedule:"Нет мероприятий для этого вида.",emptyMeals:"Нет приёмов пищи для этого вида.",emptyTasks:"Нет задач для этого вида.",emptyBring:"Нет вещей для этого вида.",emptyCars:"Нет машин или поездок.",emptyPassengers:"Пассажиры не назначены.",deleteConfirm:"Удалить «{name}»? Это нельзя отменить.",removeParticipantConfirm:"Удалить «{name}»? Связанные назначения будут очищены.",invalidData:"Сохранённые или импортированные данные неверны. Текущая информация сохранена.",storageError:"Не удалось сохранить изменения в этом браузере.",requiredTitle:"Введите название или имя.",importConfirm:"Заменить всю текущую информацию этой копией?",imported:"Резервная копия импортирована.",exported:"Резервная копия скачана.",copied:"Сводка скопирована.",shareUnavailable:"Общий доступ не поддерживается. Сводка скопирована.",publicBlocked:"Версия только для чтения не может менять данные.",publishInstructions:"Файл published-data.js скачан.\n1. Замените старый файл в папке проекта.\n2. Сделайте Commit.\n3. Сделайте Push в GitHub.\n4. Обновите сайт GitHub Pages.",capacityWarning:"Слишком много пассажиров: {used} при {seats} местах.",duplicateWarning:"{name} назначен более чем на одну поездку ({direction}).",driverPassengerWarning:"Водитель также указан пассажиром.",notAssignedWarning:"Не назначены: {names}",dataRecovered:"Сохранённые данные повреждены, поэтому показаны безопасные данные по умолчанию. Повреждённое значение не перезаписано.",yes:"Да",no:"Нет"
    }
  };

  const defaults = {
    version:3,
    event:{title:"סוף שבוע משפחתי בצפון",subtitle:"שישי עד ראשון · תכנון משותף למשפחה",startDate:"",endDate:"",location:"כפר בלום",notes:""},
    participants:["אני","אמא","אחות","מיכאל","אלכס","מרינה","דוד","סשה","אולגה"],
    activeCoordinator:"אני",handoverAt:"",
    schedule:[
      {id:1,day:"Friday",time:"08:30",endTime:"",title:"יציאה מהבית",owner:"",status:"confirmed",notes:""},
      {id:2,day:"Friday",time:"10:30",endTime:"",title:"הגעה לכפר בלום",owner:"אמא",status:"confirmed",notes:""},
      {id:3,day:"Friday",time:"11:00",endTime:"",title:"מסלול קייקים",owner:"אחות",status:"confirmed",notes:""}
    ],
    meals:[{id:101,day:"Friday",time:"19:00",mealType:"dinner",title:"ארוחת ערב שישי",dishes:"בשר על האש, סלט ותוספות",quantity:"",owner:"",notes:""}],
    tasks:[{id:21,title:"לבחור ולהכין משחק לערב שישי",owner:"",category:"פעילות",done:false,deadline:""}],
    bring:[{id:31,title:"רמקול נייד",owner:"אלכס",category:"ציוד",quantity:"1",done:false}],
    cars:[{id:41,driver:"מיכאל",direction:"arrival",day:"Friday",time:"12:30",origin:"חולון",seats:3,passengers:["אני","אחות"],needRide:false}]
  };
  let lang = "he";
  let storageWasInvalid = false;

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function valid(data) {
    return data && typeof data === "object" && Array.isArray(data.schedule) && Array.isArray(data.meals) &&
      Array.isArray(data.tasks) && Array.isArray(data.bring) && Array.isArray(data.cars);
  }
  function migrate(input) {
    const d = clone(input);
    d.version = 3;
    d.event = Object.assign({}, defaults.event, d.event || {});
    d.participants = Array.isArray(d.participants) ? d.participants.filter(function (x) { return typeof x === "string" && x.trim(); }) : clone(defaults.participants);
    if (!d.participants.length && Number(d.participantCount) > 0) d.participants = clone(defaults.participants);
    ["schedule","meals","tasks","bring","cars"].forEach(function (key) { if (!Array.isArray(d[key])) d[key] = []; });
    d.schedule.forEach(function(x){ if (x.endTime === undefined) x.endTime = ""; });
    d.meals.forEach(function(x){ if (x.time === undefined) x.time = ""; });
    d.tasks.forEach(function(x){ if (x.deadline === undefined) x.deadline = ""; });
    d.bring.forEach(function(x){ if (x.quantity === undefined) x.quantity = ""; });
    d.cars.forEach(function(x){ if (!Array.isArray(x.passengers)) x.passengers = []; });
    return d;
  }
  function loadState() {
    if (!isLocalEditor) return valid(window.PUBLISHED_EVENT_DATA) ? migrate(window.PUBLISHED_EVENT_DATA) : migrate(defaults);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return migrate(defaults);
    try { const parsed = JSON.parse(raw); if (!valid(parsed)) throw new Error("schema"); return migrate(parsed); }
    catch (e) { storageWasInvalid = true; return migrate(defaults); }
  }
  let state = loadState();
  window.tripApp = { getState:function(){return clone(state);}, isLocalEditor:isLocalEditor };

  function t(key, vars) {
    let value = (I[lang] && I[lang][key]) || I.en[key] || key;
    Object.keys(vars || {}).forEach(function(k){ value = value.replace("{" + k + "}", vars[k]); });
    return value;
  }
  function esc(value) { const d=document.createElement("div"); d.textContent=value == null ? "" : String(value); return d.innerHTML; }
  function attr(value) { return esc(value).replace(/"/g,"&quot;"); }
  function byId(id){ return document.getElementById(id); }
  function mutationAllowed() { if (isLocalEditor) return true; console.warn(t("publicBlocked")); return false; }
  function save() {
    if (!mutationAllowed()) return false;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; }
    catch(e) { showMessage(t("storageError")); return false; }
  }
  function mutate(fn) { if (!mutationAllowed()) return false; fn(); if (save()) { render(); return true; } return false; }
  window.tripApp.attemptMutation = function(){ return mutate(function(){}); };
  function option(value,label,selected){ return '<option value="'+attr(value)+'"'+(String(value)===String(selected)?' selected':'')+'>'+esc(label)+'</option>'; }
  function options(rows,selected){ return rows.map(function(x){return option(x[0],x[1],selected);}).join(""); }
  function peopleOptions(selected,blank) { let s=blank===false?"":option("",t("noOwner"),selected); return s+state.participants.map(function(p){return option(p,p,selected);}).join(""); }
  function empty(key){ return '<div class="empty">'+esc(t(key))+'</div>'; }
  function editButtons(type,x){ return isLocalEditor?'<div class="actions"><button class="btn" data-edit="'+type+'" data-id="'+x.id+'">'+t("edit")+'</button><button class="btn danger" data-delete="'+type+'" data-id="'+x.id+'">'+t("delete")+'</button></div>':""; }
  function dayText(v){ return t(v); }
  function ownerText(v){ return v || t("noOwner"); }

  function setStatic(){
    document.documentElement.lang=lang; document.documentElement.dir=lang==="he"?"rtl":"ltr";
    document.querySelectorAll("[data-k]").forEach(function(el){el.textContent=t(el.dataset.k);});
    byId("langSelect").value=lang;
    byId("dayFilter").innerHTML=options([["all",t("allDays")],["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]],byId("dayFilter").value||"all");
    byId("mealDayFilter").innerHTML=byId("dayFilter").innerHTML;
    byId("taskFilter").innerHTML=options([["all",t("all")],["open",t("open")],["done",t("done")],["unassigned",t("unassigned")]],byId("taskFilter").value||"all");
    byId("bringFilter").innerHTML=options([["all",t("all")],["unassigned",t("unassigned")],["done",t("ready")]],byId("bringFilter").value||"all");
    render();
  }
  function render(){
    document.querySelectorAll(".editor-only").forEach(function(el){el.style.display=isLocalEditor?"":"none";});
    document.querySelectorAll(".public-only").forEach(function(el){el.style.display=isLocalEditor?"none":"";});
    byId("modeNotice").textContent=t(isLocalEditor?"localMode":"publicMode");
    byId("appTitle").textContent=state.event.title||t("title"); byId("appSubtitle").textContent=state.event.subtitle||t("subtitle");
    byId("participantCount").textContent=state.participants.length; byId("openTasks").textContent=state.tasks.filter(function(x){return !x.done;}).length;
    byId("unassignedItems").textContent=state.bring.filter(function(x){return !x.owner;}).length; byId("rideRequests").textContent=state.cars.filter(function(x){return x.needRide;}).length;
    byId("coordinatorSelect").innerHTML=peopleOptions(state.activeCoordinator,false); byId("coordinatorSelect").disabled=!isLocalEditor;
    byId("handoverNote").textContent=t("currentCoordinator")+": "+(state.activeCoordinator||t("noOwner"));
    renderSchedule(); renderMeals(); renderTasks(); renderBring(); renderCars(); renderHome();
    if(storageWasInvalid){showMessage(t("dataRecovered"));storageWasInvalid=false;}
  }
  function card(title,meta,owner,status){return '<div class="item"><div class="item-top"><div><h3>'+esc(title)+'</h3><div class="meta"><span>'+esc(meta)+'</span><span>'+esc(owner)+'</span></div></div><span class="badge '+(status==="warn"?"warn":"")+'">'+esc(status==="warn"?t("needAttention"):t(status))+'</span></div></div>';}
  function renderHome(){
    byId("nextActivities").innerHTML=state.schedule.length?state.schedule.slice(0,3).map(function(x){return card(x.title,dayText(x.day)+" "+x.time,ownerText(x.owner),x.status);}).join(""):empty("emptySchedule");
    let a=[]; state.tasks.filter(function(x){return !x.owner&&!x.done;}).forEach(function(x){a.push(card(x.title,x.category,ownerText(x.owner),"warn"));});
    state.bring.filter(function(x){return !x.owner&&!x.done;}).forEach(function(x){a.push(card(x.title,x.category,ownerText(x.owner),"warn"));});
    state.cars.filter(function(x){return x.needRide;}).forEach(function(x){a.push(card(x.driver+" — "+t("needsRide"),dayText(x.day)+" "+x.time,x.origin,"warn"));});
    byId("attentionList").innerHTML=a.length?a.join(""):empty("nothingOpen");
  }
  function renderSchedule(){
    const f=byId("dayFilter").value||"all", rows=state.schedule.filter(function(x){return f==="all"||x.day===f;});
    byId("scheduleList").innerHTML=rows.length?rows.map(function(x){return '<div class="item"><div class="item-top"><div><h3>'+esc(x.title)+'</h3><div class="meta"><span>'+esc(dayText(x.day)+" · "+x.time+(x.endTime?"–"+x.endTime:""))+'</span><span>'+esc(ownerText(x.owner))+'</span></div><div class="meta">'+esc(x.notes||"")+'</div></div><span class="badge">'+esc(x.status==="confirmed"?t("confirmedStatus"):t("proposed"))+'</span></div>'+editButtons("schedule",x)+'</div>';}).join(""):empty("emptySchedule");
  }
  function renderMeals(){
    const f=byId("mealDayFilter").value||"all",rows=state.meals.filter(function(x){return f==="all"||x.day===f;});
    byId("mealsList").innerHTML=rows.length?rows.map(function(x){return '<div class="card"><div class="item-top"><div><h3>'+esc(x.title)+'</h3><div class="meta"><span>'+esc(dayText(x.day)+" "+(x.time||""))+'</span><span>'+esc(t(x.mealType))+'</span><span>'+esc(ownerText(x.owner))+'</span></div></div><span class="badge">'+esc(x.quantity?t("quantity")+": "+x.quantity:t("proposed"))+'</span></div><div><strong>'+t("dishes")+':</strong> '+esc(x.dishes||"—")+'</div><div class="meta">'+esc(x.notes||"")+'</div>'+editButtons("meal",x)+'</div>';}).join(""):empty("emptyMeals");
  }
  function renderTasks(){
    const f=byId("taskFilter").value||"all",rows=state.tasks.filter(function(x){return f==="all"||(f==="open"&&!x.done)||(f==="done"&&x.done)||(f==="unassigned"&&!x.owner);});
    byId("taskList").innerHTML=rows.length?rows.map(function(x){return '<div class="item"><div class="item-top"><div><h3>'+esc(x.title)+'</h3><div class="meta"><span>'+esc(x.category||"")+'</span><span>'+esc(ownerText(x.owner))+'</span><span>'+esc(x.deadline||"")+'</span></div></div><span class="badge '+(x.done?"done":!x.owner?"warn":"")+'">'+esc(x.done?t("completed"):!x.owner?t("unassigned"):t("inProgress"))+'</span></div>'+editButtons("task",x)+'</div>';}).join(""):empty("emptyTasks");
  }
  function renderBring(){
    const f=byId("bringFilter").value||"all",rows=state.bring.filter(function(x){return f==="all"||(f==="unassigned"&&!x.owner)||(f==="done"&&x.done);});
    byId("bringListEl").innerHTML=rows.length?rows.map(function(x){return '<div class="item"><div class="item-top"><div><h3>'+esc(x.title)+'</h3><div class="meta"><span>'+esc(x.category||"")+'</span><span>'+esc(ownerText(x.owner))+'</span><span>'+esc(x.quantity?t("quantity")+": "+x.quantity:"")+'</span></div></div><span class="badge '+(x.done?"done":!x.owner?"warn":"")+'">'+esc(x.done?t("completed"):!x.owner?t("unassigned"):t("responsible"))+'</span></div>'+editButtons("bring",x)+'</div>';}).join(""):empty("emptyBring");
  }
  function carWarnings(car){
    let w=[]; if(!car.needRide&&car.passengers.length>car.seats)w.push(t("capacityWarning",{used:car.passengers.length,seats:car.seats}));
    if(car.passengers.indexOf(car.driver)>=0)w.push(t("driverPassengerWarning"));
    car.passengers.forEach(function(p){const n=state.cars.filter(function(c){return c.direction===car.direction&&c.passengers.indexOf(p)>=0;}).length;if(n>1&&!w.some(function(z){return z.indexOf(p)>=0;}))w.push(t("duplicateWarning",{name:p,direction:t(car.direction)}));});
    return w;
  }
  function renderCars(){
    if(!state.cars.length){byId("carsList").innerHTML=empty("emptyCars");return;}
    let html=state.cars.map(function(x){let used=x.passengers.length,p=x.seats?Math.min(100,used/x.seats*100):0,w=carWarnings(x);return '<div class="card"><div class="item-top"><div><h3>'+(x.needRide?"🚕 ":"🚗 ")+esc(x.driver)+'</h3><div class="meta"><span>'+esc(dayText(x.day)+" "+x.time)+'</span><span>'+esc(x.origin)+'</span></div></div><span class="badge '+(x.needRide?"warn":"")+'">'+esc(x.needRide?t("needsRide"):t(x.direction))+'</span></div>'+(!x.needRide?'<div class="meta">'+t("seats")+': '+used+'/'+x.seats+'</div><div class="seatbar"><span style="width:'+p+'%"></span></div><div class="meta">'+esc(x.passengers.join(", ")||t("emptyPassengers"))+'</div>':"")+(w.length?'<div class="warning-list">'+w.map(function(z){return "<div>⚠ "+esc(z)+"</div>";}).join("")+"</div>":"")+editButtons("car",x)+'</div>';}).join("");
    ["arrival","departure"].forEach(function(direction){const journeys=state.cars.filter(function(c){return c.direction===direction&&!c.needRide;});if(!journeys.length)return;const assigned=[];journeys.forEach(function(c){assigned.push(c.driver);assigned.push.apply(assigned,c.passengers);});const missing=state.participants.filter(function(p){return assigned.indexOf(p)<0;});if(missing.length)html+='<div class="card warning-list"><strong>'+esc(t(direction))+'</strong><div>⚠ '+esc(t("notAssignedWarning",{names:missing.join(", ")}))+'</div></div>';});
    byId("carsList").innerHTML=html;
  }

  let formType="", editingId=null;
  function field(label,id,type,value,full){
    if(type==="textarea")return '<label class="'+(full?"full":"")+'">'+t(label)+'<textarea id="'+id+'" class="textarea">'+esc(value||"")+'</textarea></label>';
    return '<label class="'+(full?"full":"")+'">'+t(label)+'<input id="'+id+'" class="input" type="'+type+'" value="'+attr(value||"")+'"></label>';
  }
  function selectField(label,id,html,full){return '<label class="'+(full?"full":"")+'">'+t(label)+'<select id="'+id+'">'+html+'</select></label>';}
  function openForm(type,id){
    if(!mutationAllowed())return; formType=type;editingId=id==null?null:Number(id);
    const map={schedule:"schedule",meal:"meals",task:"tasks",bring:"bring",car:"cars"}, arr=map[type]?state[map[type]]:[], x=editingId==null?{}:(arr.find(function(v){return Number(v.id)===editingId;})||{});
    byId("modalTitle").textContent=t(editingId==null?"add":"edit"); let h='<div class="form-grid">';
    const days=[["Friday",t("Friday")],["Saturday",t("Saturday")],["Sunday",t("Sunday")]];
    if(type==="settings")h+=field("eventTitle","fTitle","text",state.event.title,true)+field("eventSubtitle","fSubtitle","text",state.event.subtitle,true)+field("startDate","fStartDate","date",state.event.startDate)+field("endDate","fEndDate","date",state.event.endDate)+field("location","fLocation","text",state.event.location,true)+field("generalNotes","fNotes","textarea",state.event.notes,true);
    if(type==="participants"){h+='<div class="full" id="participantEditor">'+participantEditor()+'</div>'+field("participantName","fNewParticipant","text","",true)+'<button type="button" class="btn full" id="addParticipantBtn">'+t("addParticipant")+'</button>';}
    if(type==="schedule")h+=selectField("day","fDay",options(days,x.day||"Friday"))+field("startTime","fTime","time",x.time)+field("endTime","fEndTime","time",x.endTime)+field("activity","fTitle","text",x.title,true)+selectField("owner","fOwner",peopleOptions(x.owner,true))+selectField("status","fStatus",options([["confirmed",t("confirmedStatus")],["proposed",t("proposed")]],x.status||"confirmed"))+field("notes","fNotes","textarea",x.notes,true);
    if(type==="meal")h+=selectField("day","fDay",options(days,x.day||"Friday"))+field("time","fTime","time",x.time)+selectField("meal","fMealType",options([["breakfast",t("breakfast")],["lunch",t("lunch")],["dinner",t("dinner")],["snacks",t("snacks")]],x.mealType||"dinner"))+field("meal","fTitle","text",x.title,true)+field("dishes","fDishes","textarea",x.dishes,true)+field("quantity","fQuantity","text",x.quantity)+selectField("owner","fOwner",peopleOptions(x.owner,true))+field("notes","fNotes","textarea",x.notes,true);
    if(type==="task")h+=field("activity","fTitle","text",x.title,true)+field("category","fCategory","text",x.category)+selectField("owner","fOwner",peopleOptions(x.owner,true))+field("deadline","fDeadline","date",x.deadline)+selectField("status","fDone",options([["false",t("open")],["true",t("completed")]],String(!!x.done)));
    if(type==="bring")h+=field("item","fTitle","text",x.title,true)+field("category","fCategory","text",x.category)+field("quantity","fQuantity","text",x.quantity)+selectField("owner","fOwner",peopleOptions(x.owner,true))+selectField("status","fDone",options([["false",t("notReady")],["true",t("ready")]],String(!!x.done)));
    if(type==="car"){h+=selectField("driver","fDriver",peopleOptions(x.driver,false))+selectField("type","fNeedRide",options([["false",t("responsible")],["true",t("needsRide")]],String(!!x.needRide)))+selectField("direction","fDirection",options([["arrival",t("arrival")],["departure",t("departure")]],x.direction||"arrival"))+selectField("day","fDay",options(days,x.day||"Friday"))+field("time","fTime","time",x.time)+field("origin","fOrigin","text",x.origin)+field("seats","fSeats","number",x.seats==null?3:x.seats);h+='<label class="full">'+t("passengers")+'<div class="checkboxes">'+state.participants.map(function(p){return '<label><input type="checkbox" name="fPassenger" value="'+attr(p)+'" '+((x.passengers||[]).indexOf(p)>=0?"checked":"")+'>'+esc(p)+'</label>';}).join("")+'</div></label>';}
    if(type!=="participants")h+='<button type="button" class="btn primary full" id="saveForm">'+t("save")+'</button>';
    h+='</div>';byId("formContainer").innerHTML=h;byId("modal").classList.add("open");
  }
  function participantEditor(){return state.participants.length?state.participants.map(function(p,i){return '<div class="participant-row"><input class="input participant-name" data-index="'+i+'" value="'+attr(p)+'"><button class="btn" data-person-move="-1" data-index="'+i+'" aria-label="'+t("moveUp")+'">↑</button><button class="btn" data-person-move="1" data-index="'+i+'" aria-label="'+t("moveDown")+'">↓</button><button class="btn danger" data-person-remove data-index="'+i+'">'+t("remove")+'</button></div>';}).join(""):empty("emptyParticipants");}
  function value(id){return byId(id)?byId(id).value:"";}
  function commitForm(){
    if(!mutationAllowed())return; if(formType==="participants")return;
    if(formType!=="settings"&&!value("fTitle")&&formType!=="car"){showMessage(t("requiredTitle"));return;}
    mutate(function(){
      if(formType==="settings"){state.event={title:value("fTitle"),subtitle:value("fSubtitle"),startDate:value("fStartDate"),endDate:value("fEndDate"),location:value("fLocation"),notes:value("fNotes")};return;}
      const map={schedule:"schedule",meal:"meals",task:"tasks",bring:"bring",car:"cars"},arr=state[map[formType]],old=editingId==null?null:arr.find(function(x){return Number(x.id)===editingId;}),id=old?old.id:Date.now();
      let obj;
      if(formType==="schedule")obj={id:id,day:value("fDay"),time:value("fTime"),endTime:value("fEndTime"),title:value("fTitle"),owner:value("fOwner"),status:value("fStatus"),notes:value("fNotes")};
      if(formType==="meal")obj={id:id,day:value("fDay"),time:value("fTime"),mealType:value("fMealType"),title:value("fTitle"),dishes:value("fDishes"),quantity:value("fQuantity"),owner:value("fOwner"),notes:value("fNotes")};
      if(formType==="task")obj={id:id,title:value("fTitle"),category:value("fCategory"),owner:value("fOwner"),deadline:value("fDeadline"),done:value("fDone")==="true"};
      if(formType==="bring")obj={id:id,title:value("fTitle"),category:value("fCategory"),quantity:value("fQuantity"),owner:value("fOwner"),done:value("fDone")==="true"};
      if(formType==="car")obj={id:id,driver:value("fDriver"),needRide:value("fNeedRide")==="true",direction:value("fDirection"),day:value("fDay"),time:value("fTime"),origin:value("fOrigin"),seats:Number(value("fSeats")||0),passengers:Array.from(document.querySelectorAll('[name="fPassenger"]:checked')).map(function(el){return el.value;})};
      if(old)arr[arr.indexOf(old)]=obj;else arr.push(obj);
    });byId("modal").classList.remove("open");
  }
  function removeParticipant(index){
    const name=state.participants[index];if(!name||!confirm(t("removeParticipantConfirm",{name:name})))return;
    mutate(function(){state.participants.splice(index,1);if(state.activeCoordinator===name)state.activeCoordinator=state.participants[0]||"";["schedule","meals","tasks","bring"].forEach(function(k){state[k].forEach(function(x){if(x.owner===name)x.owner="";});});state.cars.forEach(function(c){if(c.driver===name)c.driver="";c.passengers=c.passengers.filter(function(p){return p!==name;});});});openForm("participants");
  }
  function deleteItem(type,id){
    const map={schedule:"schedule",meal:"meals",task:"tasks",bring:"bring",car:"cars"},arr=state[map[type]],x=arr.find(function(v){return Number(v.id)===Number(id);});if(!x)return;
    const name=x.title||x.driver||t(type);if(!confirm(t("deleteConfirm",{name:name})))return;mutate(function(){state[map[type]]=arr.filter(function(v){return Number(v.id)!==Number(id);});});
  }
  function download(name,text,mime){const blob=new Blob([text],{type:mime}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
  function exportWebsite(){if(!mutationAllowed())return;download("published-data.js","/* Generated by the local organizer. Do not publish sensitive personal information. */\nwindow.PUBLISHED_EVENT_DATA = "+JSON.stringify(state,null,2)+";\n","text/javascript;charset=utf-8");showMessage(t("publishInstructions"));}
  function exportBackup(){if(!mutationAllowed())return;const date=new Date().toISOString().slice(0,10);download("family-trip-backup-"+date+".json",JSON.stringify(state,null,2),"application/json;charset=utf-8");showMessage(t("exported"));}
  function importBackup(file){if(!mutationAllowed()||!file)return;const reader=new FileReader();reader.onload=function(){try{const data=JSON.parse(reader.result);if(!valid(data))throw new Error("schema");if(!confirm(t("importConfirm")))return;state=migrate(data);save();render();showMessage(t("imported"));}catch(e){showMessage(t("invalidData"));}byId("backupFile").value="";};reader.onerror=function(){showMessage(t("invalidData"));};reader.readAsText(file);}
  function summary(){
    let lines=[state.event.title,[state.event.startDate,state.event.endDate].filter(Boolean).join(" – "),state.event.location,state.event.notes].filter(Boolean);
    if(state.schedule.length){lines.push("\n"+t("schedule")+":");state.schedule.forEach(function(x){lines.push("• "+dayText(x.day)+" "+x.time+" "+x.title+(x.owner?" — "+x.owner:""));});}
    if(state.meals.length){lines.push("\n"+t("meals")+":");state.meals.forEach(function(x){lines.push("• "+x.title+" — "+ownerText(x.owner));});}
    const tasks=state.tasks.filter(function(x){return !x.done;});if(tasks.length){lines.push("\n"+t("openTasks")+":");tasks.forEach(function(x){lines.push("• "+x.title+" — "+ownerText(x.owner));});}
    const items=state.bring.filter(function(x){return !x.owner;});if(items.length){lines.push("\n"+t("unassignedItems")+":");items.forEach(function(x){lines.push("• "+x.title);});}
    if(state.cars.length){lines.push("\n"+t("cars")+":");state.cars.forEach(function(x){lines.push("• "+t(x.direction)+" — "+x.driver+", "+x.passengers.join(", ")+" ("+Math.max(0,x.seats-x.passengers.length)+" "+t("seats")+")");});}
    return lines.join("\n");
  }
  function copySummary(publicArea){const text=summary(),done=function(){showMessage(t("copied"),publicArea);};if(navigator.clipboard&&location.protocol!=="file:")navigator.clipboard.writeText(text).then(done).catch(function(){fallbackCopy(text);done();});else{fallbackCopy(text);done();}}
  function fallbackCopy(text){const a=document.createElement("textarea");a.value=text;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();document.execCommand("copy");a.remove();}
  function shareSummary(publicArea){if(navigator.share)navigator.share({title:state.event.title,text:summary()}).catch(function(){});else{copySummary(publicArea);showMessage(t("shareUnavailable"),publicArea);}}
  function showMessage(text,publicArea){const el=byId(publicArea?"publicMessage":"toolMessage");if(el)el.textContent=text;}

  document.addEventListener("click",function(e){
    const tab=e.target.closest(".tab");if(tab){document.querySelectorAll(".tab").forEach(function(x){x.classList.remove("active");});tab.classList.add("active");document.querySelectorAll(".view").forEach(function(x){x.classList.remove("active");});byId(tab.dataset.view+"View").classList.add("active");}
    const op=e.target.closest("[data-open]");if(op)openForm(op.dataset.open);
    const ed=e.target.closest("[data-edit]");if(ed)openForm(ed.dataset.edit,ed.dataset.id);
    const del=e.target.closest("[data-delete]");if(del)deleteItem(del.dataset.delete,del.dataset.id);
    if(e.target.id==="saveForm")commitForm();
    if(e.target.id==="addParticipantBtn"){const n=value("fNewParticipant").trim();if(!n){showMessage(t("requiredTitle"));return;}mutate(function(){if(state.participants.indexOf(n)<0)state.participants.push(n);});openForm("participants");}
    const rem=e.target.closest("[data-person-remove]");if(rem)removeParticipant(Number(rem.dataset.index));
    const move=e.target.closest("[data-person-move]");if(move){const i=Number(move.dataset.index),j=i+Number(move.dataset.personMove);if(j>=0&&j<state.participants.length)mutate(function(){const p=state.participants.splice(i,1)[0];state.participants.splice(j,0,p);});openForm("participants");}
  });
  byId("formContainer").addEventListener("change",function(e){if(e.target.classList.contains("participant-name")){const i=Number(e.target.dataset.index),old=state.participants[i],n=e.target.value.trim();if(n&&n!==old)mutate(function(){state.participants[i]=n;if(state.activeCoordinator===old)state.activeCoordinator=n;["schedule","meals","tasks","bring"].forEach(function(k){state[k].forEach(function(x){if(x.owner===old)x.owner=n;});});state.cars.forEach(function(c){if(c.driver===old)c.driver=n;c.passengers=c.passengers.map(function(p){return p===old?n:p;});});});}});
  byId("handoverBtn").addEventListener("click",function(){mutate(function(){state.activeCoordinator=byId("coordinatorSelect").value;state.handoverAt=new Date().toISOString();});});
  byId("closeModal").addEventListener("click",function(){byId("modal").classList.remove("open");});byId("modal").addEventListener("click",function(e){if(e.target===this)this.classList.remove("open");});
  byId("langSelect").addEventListener("change",function(e){lang=e.target.value;setStatic();});["dayFilter","mealDayFilter","taskFilter","bringFilter"].forEach(function(id){byId(id).addEventListener("change",render);});
  byId("publishExportBtn").addEventListener("click",exportWebsite);byId("backupExportBtn").addEventListener("click",exportBackup);byId("backupImportBtn").addEventListener("click",function(){byId("backupFile").click();});byId("backupFile").addEventListener("change",function(){importBackup(this.files[0]);});
  byId("copySummaryBtn").addEventListener("click",function(){copySummary(false);});byId("shareSummaryBtn").addEventListener("click",function(){shareSummary(false);});byId("publicCopySummaryBtn").addEventListener("click",function(){copySummary(true);});byId("publicShareSummaryBtn").addEventListener("click",function(){shareSummary(true);});
  setStatic();
})();
