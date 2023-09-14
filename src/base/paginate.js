export function usePagiante(store, params) {
  const load = async ($state) => {
    try {
      await store.getAll(params)

      if (store.meta.last_page === store.meta.current_page) {
        $state.complete()
      }
      else {
        $state.loaded()
        store.meta.current_page++
      }
    }
    catch (error) {
      $state.error()
    }
  }

  return { load }
}
