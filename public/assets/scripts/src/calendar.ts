import { 
  addDays, 
  startOfMonth, 
  endOfMonth,
  endOfWeek, 
  format, 
  startOfWeek, 
  differenceInSeconds 
} from "date-fns";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector("#schedules-new");

if(page){
  
  const today = new Date();

  let beginOfMonth = startOfMonth(today);

  const btnToday  = page.querySelector(".btn-today") as HTMLButtonElement;
  const btnPrev   = page.querySelector(".btn-prev") as HTMLButtonElement;
  const btnNext   = page.querySelector(".btn-next") as HTMLButtonElement;
  const title     = page.querySelector("h2") as HTMLHeadingElement;
  const calendar  = page.querySelector(".days") as HTMLButtonElement;

  const render = () =>{
    title.innerText = format(beginOfMonth, "MMMM yyyy", { locale });

    calendar.innerHTML = "";

    let currentDay = startOfWeek(beginOfMonth);
    const lastDay = endOfWeek(endOfMonth(beginOfMonth));

    while(differenceInSeconds(lastDay, currentDay) > 0){
      const li = document.createElement('li');
      li.innerText = format(currentDay, 'd');
      li.dataset.schedule = format(currentDay,'yyyy-MM-dd');

      if(format(currentDay, 'yyyyMM') < format(beginOfMonth, 'yyyyMM')){
        li.classList.add("month-prev");
      }

      if(format(currentDay, 'yyyyMM') > format(beginOfMonth, 'yyyyMM')){
        li.classList.add("month-next");
      }

      if(format(currentDay, 'yyyyMM') === format(today, 'yyyyMM')){
        li.classList.add("active");
      }

      calendar.appendChild(li);
      currentDay = addDays(currentDay, 1);

    }
  };

  render();

}