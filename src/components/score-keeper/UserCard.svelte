<script>
import { scoreKeeperStore } from "../../stores/score-keeper";

  export let userData; 
  let Users; 
  scoreKeeperStore.subscribe(data => Users = data.users); 
  function updateScore(e){
    //find all scores and update based on username
     const updatedScores = Users.map(user => {
      if(user.username == userData.username){
         user.score += Number(e.target.value);
      }
      return user;
     }); 
     //return new score object with updatedScores
     scoreKeeperStore.update(store => Object.assign({}, store, {users: updatedScores})); 
  }
</script>
<div class="bg-white shadow-md border rounded px-8 pt-6 pb-8 m-2">
  <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
    {userData.username}
  </label>
   <div>
    <input class="w-16 shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="score" type="text" placeholder={userData.score}>
    <button on:click={updateScore} value="5" class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded" type="button">
      +5
    </button>
    <button on:click={updateScore} value="10" class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded" type="button">
      +10
    </button>
    <button on:click={updateScore} value="20" class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded" type="button">
      +20
    </button>
    <button on:click={updateScore} value="50" class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded" type="button">
      +50
    </button> 
   </div>
 </div>