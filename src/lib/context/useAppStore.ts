import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUser, IBreadcrumbItem } from "@/lib/interfaces";

interface AppStore {
  user: IUser | undefined;
  breadcrumbs: IBreadcrumbItem[] | undefined;
}

interface AppActions {
  setUser: (user: IUser | undefined) => void;
  setBreadcrumbs: (items: IBreadcrumbItem[]) => void;
}

const useAppStore = create<AppStore & AppActions>()(
  persist(
    (set, get) => ({
      user: undefined,
      breadcrumbs: undefined,
      setUser: (user) => {
        set((state) => ({
          ...state,
          user,
        }));
      },
      setBreadcrumbs: (items) => {
        set((state) => ({
          ...state,
          breadcrumbs: items,
        }));
      }
    }),
    {
      name: "store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAppStore;
