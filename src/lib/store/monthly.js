import { readable, writable } from "svelte/store";

// const MonthlyCoin = writable(
//   {
//     'coin': 'BTC'
//   }
// )
function MonthlyCoin(/** @type {string} */ val) {
  const { subscribe, set, update} = writable(val)

  function newValue() {
    val = val
  }

  return { subscribe, newValue }
}

export const coin = MonthlyCoin('BTC')