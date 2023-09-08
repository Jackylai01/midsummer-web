export const scrollOptions = {
  behavior: 'smooth' as const,
};

// 滾動到指定位置的共享邏輯
export const scrollTo = (id: string, offset: number) => {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target?.offsetTop - offset,
      ...scrollOptions,
    });
  }
};
