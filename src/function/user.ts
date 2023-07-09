import { create } from "zustand";

export const useCounter = create((set) => {
  return {
    bot: {},
    incrCounter: async () => {
      const response = await fetch(`/api/users/@me`, {
        headers: {
          Authorization: `Bearer undefined`,
        },
        method: "POST",
      });

      if (response.ok) {
        const { user, bot } = await response.json();

        console.log(bot);
        set({
          bot: bot,
        });
      }
    },
  };
});
