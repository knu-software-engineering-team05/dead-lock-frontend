const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export const getDateSet = (targetDateString: string): { date: string; time: string } => {
  const targetDate = new Date(targetDateString);

  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const week = WEEK[targetDate.getDay()];
  const dateString = `${year}년 ${month}월 ${day}일 (${week})`;

  const time = targetDate.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return { date: dateString, time };
};
