import type { InjectionKey, Ref } from 'vue'

// Shared by Dashboard.vue (provide) and TopNavigationBar.vue (inject), so both sides are type-checked
// against one shape and one key instead of being linked only by the string 'menuCollapse'.
export interface MenuCollapse {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

export const menuCollapseKey: InjectionKey<MenuCollapse> = Symbol('menuCollapse')
