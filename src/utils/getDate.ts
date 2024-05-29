const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export const getDateSet = (targetDate: Date): { date: string; time: string } => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const week = WEEK[targetDate.getDay()];
  const date = `${year}년 ${month}월 ${day}일 (${week})`;

  const time = targetDate.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return { date, time };
};
