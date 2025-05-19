//about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="notebook">
      <h1>About Me</h1>
      <p>
        Hello, my name is Rachel and I'm a tech professional living in the Midwest .Outside of work, I’m
        committed to staying active and healthy through fitness. Whether it’s
        hitting the gym, going for a run, or trying out new workouts, fitness
        helps me stay focused and energized. Living in the Midwest has given me
        a grounded perspective, a strong work ethic, and an appreciation for
        community. I enjoy balancing the fast-paced world of tech with the
        discipline and routine that fitness brings. I'm always looking for ways
        to grow both personally and professionally, and I’m driven by a desire
        to make meaningful contributions through technology while maintaining a
        well-rounded and healthy lifestyle.
      </p>
      <h1>Bucket List</h1>
      <p>
        I have always had a bucket list to travel to many different places, but
        my life changed in 2023 where my bucket list also changed. My current
        bucket list is finding meaning in a world filled with grief after losing
        my sister in 2023. Her death was very hard for me, and I’ve been working
        on healing and self-development since then. I hope to grow stronger
        emotionally . Doing things that make me feel alive helps me cope with
        the sadness. I also want to honor my sister’s memory . My bucket list is
        being committed to healing and becoming the best version of myself as I
        continue this journey.
      </p>
    </div>
  `,
  styles: [``],
})
export class AboutComponent {}
