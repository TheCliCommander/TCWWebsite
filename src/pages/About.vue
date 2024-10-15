<template>
  <div class="about">
      <h1>About The Capital Worker</h1>
      
      <section>
          <h2>Americans Are Fed Up—And The Capital Worker Has the Answer</h2>
          <p>
              If you feel like the rich are getting richer while the rest of us are struggling to get by, you’re not alone. In fact, a whopping 70% of Americans agree that our economic system unfairly favors the wealthy over everyone else. This isn’t just a casual observation—it’s a deeply held sentiment that’s backed by numerous polls and surveys over the years, revealing widespread frustration with corporate greed, stagnant wages, and a rigged system.
          </p>
      </section>

      <section>
          <h2>The System is Rigged for the Rich</h2>
          <p>
              Recent polls reveal a stark reality: the majority of Americans believe the economic deck is stacked against them. According to a Pew Research Center study, 70% of Americans say the U.S. economic system unfairly benefits the wealthy. Meanwhile, a poll conducted by Gallup indicates that over two-thirds of Americans believe corporations have too much power in shaping economic policies, often to the detriment of workers and small businesses. 
              <a href="https://www.pewresearch.org" target="_blank">www.pewresearch.org</a>, 
              <a href="https://www.gallup.com" target="_blank">www.gallup.com</a>
          </p>
          <p>
              What does this mean for working-class people? It means we are living in a system where the wealthy and powerful write the rules while we work harder and harder for less and less. While corporate profits soar to record highs, wages for the average worker remain stagnant. A report by the Economic Policy Institute shows that, since 1979, worker productivity has grown 3.5 times faster than hourly pay, meaning workers are creating more wealth but seeing little of it in their paychecks. 
              <a href="https://www.epi.org" target="_blank">www.epi.org</a>
          </p>
      </section>

      <section>
          <h2>Frustration with Low Wages and Corporate Greed</h2>
          <p>
              Poll after poll has shown that Americans are fed up with low wages and corporate greed. According to a Reuters/Ipsos survey, 58% of Americans support raising the federal minimum wage to $15 per hour, a clear sign of growing frustration over poverty-level wages in a country where living costs continue to rise. Another survey from Hart Research Associates found that 69% of voters believe that corporate executives make far too much money compared to the average worker, and 55% of Americans support measures to significantly tax the rich.
              <a href="https://www.reuters.com" target="_blank">www.reuters.com</a>, 
              <a href="https://www.hartresearch.com" target="_blank">www.hartresearch.com</a>
          </p>
          <p>
              But it’s not just wages that have Americans angry—it's the entire system of corporate power and influence. A staggering 84% of Americans believe that large corporations have too much power over Washington, according to a Public Citizen poll. Many feel that their voices are drowned out by the influence of money in politics, leaving everyday people with little say over the policies that affect their lives.
              <a href="https://www.citizen.org" target="_blank">www.citizen.org</a>
          </p>
      </section>

      <section>
          <h2>What Can Be Done?</h2>
          <p>
              So, if you’re one of the millions of Americans who are tired of the rich getting richer while you struggle to make ends meet, you’re in the right place. At The Capital Worker, we believe the answer lies in organizing and fighting back—together. We offer concrete solutions through workers' councils and mass solidarity that can challenge the power of corporations and the wealthy. By uniting working-class people, we can take back control of our economic future and ensure that the wealth we create is shared fairly among those who truly make it possible: the workers.
          </p>
          <p>
              It’s clear that change is needed. And while politicians may make promises every election cycle, real change comes from grassroots movements. We at The Capital Worker believe that by building local power through community and workers' councils, we can create a system where the voices of working people are heard loud and clear.
          </p>
          <p>
              The anger is real—and it’s justified. Now it’s time to take that frustration and turn it into action. Join us at The Capital Worker to learn more about how you can help build a better, fairer world for all working people.
          </p>
      </section>

      <section>
          <h2>Sources:</h2>
          <ol>
              <li><a href="https://www.pewresearch.org" target="_blank">Pew Research Center</a></li>
              <li><a href="https://www.gallup.com" target="_blank">Gallup Poll</a></li>
              <li><a href="https://www.epi.org" target="_blank">Economic Policy Institute</a></li>
              <li><a href="https://www.reuters.com" target="_blank">Reuters/Ipsos Poll</a></li>
              <li><a href="https://www.hartresearch.com" target="_blank">Hart Research Associates</a></li>
          </ol>
      </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
});
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(155, 153, 153, 0.1);
  margin: 20px;
  margin-top: 55px;
  color: #ab1c03; /* Ensuring text color matches the site's theme */
  font-family: 'Montserrat', sans-serif;
}

.about h1 {
  text-align: center;
  margin-bottom: 40px;
}

.about section {
  margin-bottom: 30px;
}

.about h2 {
  color: #C0392B; /* Highlighting subheadings */
  margin-bottom: 15px;
}

.about p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.about a {
  color: #8D9B83; /* Muted earthy green for links */
  text-decoration: none;
}

.about a:hover {
  text-decoration: underline;
}

.about ol {
  padding-left: 20px;
}

.about ol li {
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .about {
      padding: 10px;
  }

  .about h1 {
      font-size: 1.8em;
  }

  .about h2 {
      font-size: 1.5em;
  }
}
</style>