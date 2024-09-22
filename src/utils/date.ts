export const getFullDate = () => {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const monthsOfYear = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = String(now.getDate()).padStart(2, '0');
  const month = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();

  return `${dayOfWeek}, ${day} de ${month} de ${year}`;
}
