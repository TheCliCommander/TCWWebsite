<template>
  <div class="about">
      <h1>About The Capital Worker</h1>
      
      <section>
          <h2>Americans Are Fed Up—And The Capital Worker Has the Answer</h2>
          <p>
            <strong>If you feel like the rich are getting richer while the rest of us are struggling to get by, you're not alone. A large number of Americans believe the economic system unfairly favors the wealthy. This frustration is supported by numerous surveys that consistently reveal concerns over corporate greed, stagnant wages, and a system rigged to benefit the rich at the expense of working people.</strong>
          </p>
      </section>

      <section>
          <h2>The System is Rigged for the Rich</h2>
          <p>
           <strong> A significant percentage of Americans believe the economic system unfairly favors the wealthy. According to the Economic Policy Institute, since 1979, worker productivity has grown much faster than wages, meaning that while workers produce more, they are not compensated fairly for it (Economic Policy Institute).</strong>
          </p>
      </section>

      <section>
          <h2>Frustration with Low Wages and Corporate Greed</h2>
          <p>
            <strong>  There is growing frustration over low wages and income inequality. The Economic Policy Institute reports that the wage gap between corporate executives and the average worker continues to widen, with corporate executives earning exponentially more than their workers (Economic Policy Institute).</strong>
          </p>
          <p>
              <strong>Additionally, Americans are increasingly disillusioned with corporate influence in politics. Studies have shown that large corporations use their financial power to sway government decisions in their favor, undermining democracy. According to research by OpenSecrets, corporate lobbying expenditures reached over $3.5 billion in 2020 alone, highlighting how corporations dominate the political landscape (OpenSecrets).</strong>
          </p>
      </section>

      <section>
          <h2>What Can Be Done?</h2>
          <p>
              <strong>If you're one of the millions of Americans tired of a system that benefits the wealthy while you struggle to make ends meet, The Capital Worker is here for you. We believe in organizing and fighting back through workers' councils and mass solidarity. By uniting the working class, we can challenge the power of corporations and reclaim control of our economic future. We are building grassroots movements that work for everyone, not just the rich.</strong>
          </p>
          <p>
            <strong> The anger and frustration are real—and justified. Now is the time to turn that energy into action. Join us at The Capital Worker to build a fairer world where the wealth created by workers is shared fairly among those who make it possible: the workers.</strong>
          </p>
      </section>

      <section>
          <h2>Sources:</h2>
          <ol>
            <strong>
              <li><a href="https://www.epi.org/publication/charting-wage-stagnation/" target="_blank">Economic Policy Institute: "Charting Wage Stagnation"</a></li>
              <li><a href="https://www.epi.org/publication/ceo-compensation-2018/" target="_blank">Economic Policy Institute: "CEO Compensation Surged in 2018"</a></li>
              <li><a href="https://www.opensecrets.org/federal-lobbying" target="_blank">OpenSecrets: "Federal Lobbying Expenditures 2020"</a></li>
            </strong>
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
  color: red; /* Ensuring text color matches the site's theme */
  font-family: 'Montserrat', sans-serif;
  background-image: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about h1 {
  text-align: center;
  margin-bottom: 40px;
}

.about section {
  margin-bottom: 30px;
}

.about h2 {
  color: red; /* Highlighting subheadings */
  margin-bottom: 15px;
}

.about p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: red;
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