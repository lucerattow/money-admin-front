import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { User, PageBreadcrumbItem } from "@/interfaces";

interface AppStore {
  user: User | undefined;
  breadcrumbs: PageBreadcrumbItem[] | undefined;
}

interface AppActions {
  setUser: (user: User | undefined) => void;
  setBreadcrumbs: (items: PageBreadcrumbItem[]) => void;
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
