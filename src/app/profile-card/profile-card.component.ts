import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }
  teamMembers: Member[] = [
    new Member('admin', 'Jesper Simonsen', `It’s time for a change. I want to create a social media platform that lives up to the promise of what social media 
    can be: a tool to facilitate human connections rather than replacing them. 
    I want to connect people in friendships that are human, profound and meaningful.`,
      "https://www.lifebonder.com/images/staff/jesper_Simonsen.jpg", "Full Stack Philosopher", "Founder & CTO", "Denmark",
      {
        facebook: "https://www.facebook.com/LifeBonder/",
        linkedin: "https://www.linkedin.com/in/jesper-simonsen-4092915/",
        instagram: "https://www.instagram.com/lifebonder_"

      }),
    new Member('admin2', 'Flemming Ubbesen',
      `At the deep evolutionary core of who we are, we’re social animals. For too long, we’ve gradually been losing an existential battle with technology we shouldn’t have to fight. We can use technology for the better. And we will. That’s what we’re doing here.`
      , "https://www.lifebonder.com/images/staff/flemming.jpg", "DREAM ALCHEMIST", "Co-founder & CMO", "Denmark",
      {
        facebook: "https://www.facebook.com/flemming.ubbesen",
        linkedin: "https://www.linkedin.com/in/flemming-ubbesen-79662a129/",
        instagram: "https://www.instagram.com/flemmingubbesen"

      }),
    new Member('team', 'Mohammad R. Hasan',
      `As a developer I have done remote works for agencies, startups and collaborated with talented people to create digital products all over the world. I joined LifeBonder because they have very innovative idea. I want to help building the NextGen in social media platform.`
      , "https://www.lifebonder.com/images/staff/hasan.jpg", "FULL STACK WIZARD", "Full Stack Developer", "Bangladesh",
      {
        linkedin: "https://www.linkedin.com/in/mohammad-hasan-22452633",
        github: "https://github.com/pori468"
      })]
  ngOnInit(): void {
  }

  objectKeys(obj: {}) {
    return Object.keys(obj);
  }

  countSocial(obj: {}) {
    return Object.keys(obj).length;
  }

}
