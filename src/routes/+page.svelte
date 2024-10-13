<script>
  import { coin } from "$lib/store/monthly.js";
  import { test } from "$lib/store/test.js";
  
   /** @type {Object} */
  let coinProfile
  let budgetProfile = 6000
  let budgetRemain = 0
  let currency = "USD"
  let inputQuantity = 1000
  let firstBuy = 50000 // D6
  let nextBuy = 0 // D7
  $: nextBuyAmount = 0 // D7
  let result = 0

  // TEST
  // MonthlyCoin.subscribe((data) => {
  //   coinProfile = data.coin
  // })
  coin.subscribe((data) => coinProfile = data)

  // End TEST

  const budgetRemainFn = function(/** @type {number} */ value) {
    budgetRemain = budgetProfile - value
    console.log(budgetRemain)
  }

  const nextBuyAmountFn = function(/** @type {number} */ value) {
    nextBuyAmount = ((inputQuantity*value)/100)+inputQuantity
    budgetRemainFn(nextBuyAmount)
  }

  $: nextBuyFnBtn = function() {
    if(nextBuy <= firstBuy) {
      result = Number((1 - nextBuy/firstBuy).toFixed(2))*100
      nextBuyAmountFn(result) 
    } else {
      result = 1
    }
  }

  budgetRemainFn(inputQuantity)
</script>
{$test}
<h2>({coinProfile})</h2> - {currency} {budgetProfile}
<ul>
  <li>Pending: <small>{currency}</small> {budgetRemain}</li>
  <li>Position: <small>{currency}</small> {inputQuantity}</li>
</ul>

<section>
  <div class="flex">
    <div class="flex-1">
      <p><strong>0%</strong> | Fist buy <br><small>{inputQuantity}</small> | {firstBuy}</p>
      <label for="buy">
        <input bind:value={nextBuy} name="buy" type="number">
        {#if nextBuy}
          <button on:click|once={nextBuyFnBtn}>ADD</button>
        {/if}
      </label>
      {#if result}
      <p>
        <strong>
          result: {result} % 
        </strong>
        | Next buy<br>
        <small>{nextBuyAmount}</small> | {nextBuy}
      </p>
      {/if}
    </div>
    <div class="flex-1">2</div>
    <div class="flex-1">3</div>
  </div>
</section>
