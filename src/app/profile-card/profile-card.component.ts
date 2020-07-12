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
      }),
    new Member("team", 'Harsha Krishnappa',
      `Lifebonder's idea about privacy and human bonding at its core I believe is currently much needed in many peoples lives. 
    Happy to be one of the builders of a new bridge that connects millions of humans if not aliens`
      , "https://www.lifebonder.com/images/staff/harsha.jpg", "MOBILITY MAVEN", "Lead Mobile Application Developer", "India",
      {
        facebook: "https://www.facebook.com/harsha.vinu.1",
        linkedin: "https://www.linkedin.com/in/harsha-k-302a7492/"
      }),
    new Member("team", 'Nemanja Matic',
      `I am a young software developer who are exited to take part in development of the NextGen social network. I am especially happy that LifeBonder's philosophy completely matches my personal opinion of what a social network should be.`
      , "https://www.lifebonder.com/images/staff/nemanja.jpg", "DIGITAL ENGINEER", "Software Developer", "Serbia",
      {
        facebook: "https://www.facebook.com/Nmatic96",
        linkedin: "https://www.linkedin.com/in/nemanja-matic-4b2ab514b/",
        instagram: "https://www.instagram.com/nmatic96/"

      }),
    new Member("team", 'Noah N. Perez Lachaud',
      `I was searching for an exciting opportunity to work in a game-changing project, that is when I found LifeBonder. I’m trill to be a part of this innovative Social Media platform. As a Front-end developer, I will continue to grow and learn.`
      , "https://www.lifebonder.com/images/staff/noah.jpg", "FRONT-END SOLDIER", "Front-end Developer", "Spain",
      {
        instagram: "https://www.instagram.com/dev_noah/",
        linkedin: "https://www.linkedin.com/in/noahlachaud"

      }),
    new Member("team", 'Kai Nguyen',
      `It’s my role being the voice of the user and advocate for the users needs. Joining Lifebonder is the most remarkable milestone that I’ve had in this year. They not only helped me in enhancing skills and visual design but also expanded my network connections.`
      , "https://www.lifebonder.com/images/staff/kai.jpg", "DESIGN ASSASSIN", "UX/UI Designer", "Vietnam | Finland",
      {
        behance: "https://www.behance.net/imkai1995",
        linkedin: "https://www.linkedin.com/in/imkai1995/"

      }),
    new Member("team", 'Lenka Loová',
      `My determination to make a difference led me to joining the LifeBonder team. It thrills me when I wonder about the impact LifeBonder might have on society. Let’s see!`
      , "https://www.lifebonder.com/images/staff/lenka.jpg", "EXPERIENCE WIZARD", "UX/UI Designer", "Slovakia",
      {
        facebook: "https://www.facebook.com/LiloLoova",
        instagram: "https://www.instagram.com/lilaloova/",
        linkedin: "https://www.linkedin.com/in/lenka-loova/",
      }),
    new Member("team", 'Kasia Szymanek',
      `I want to keep improving myself and I believe that’s exactly what lifeBonder community can give me, in professional and personal field as well.`
      , "https://www.lifebonder.com/images/staff/kasia.jpg", "SOFTWARE WRECKING-BALL", "Mobile Application Developer", "Poland",
      {
        instagram: "https://www.instagram.com/redcogito/?hl=pl",
        linkedin: "https://www.linkedin.com/in/katarzyna-szymanek-aa345bba"
      }),
    new Member("team", 'Nadjib Souab',
      `I am a junior software engineer aiming to refine my path in mobile development by creating, designing and coding user-friendly mobile applications. With LifeBonder, I am looking to develop my skills and discover the developer journey in a growing startup`
      , "https://www.lifebonder.com/images/staff/nadjib.jpg", "MOBILE APP COMPOSER", "Mobile Application Developer", "Algeria",
      {
        linkedin: "https://www.linkedin.com/in/nadjib-souab/",
        github: "https://github.com/NadjibSb"
      }),
    new Member("team", 'Hasitha Wijethilaka',
      `I am a Backend Software Developer and need to improve my skills and get international exposure for my career as well. I think LifeBonder is the perfect platform to reach my dream and to improve my skills and experience, so I love to work with LifeBonder!`
      , "https://www.lifebonder.com/images/staff/hasitha.jpg", "BACKEND NINJA", "Backend Developer", "Sri Lanka",
      {
        linkedin: "https://www.linkedin.com/in/hasitha-wijethilaka-8b398b36/"
      }),
    new Member("team", 'Lily Wang',
      `I have been working for digital marketing agencies for building brand awareness digitally about 10 years. Nothing can be more excited for me to start “Life Bonder - The NextGen social media”. That’s no doubt – I join and start this amazing journey.`
      , "https://www.lifebonder.com/images/staff/lily.jpg", "DIGITAL MARKETING CONSTRUCTOR", "Digital Marketer", "Sweden",
      {
        facebook: "https://www.facebook.com/gonordiclife/",
        linkedin: "https://www.linkedin.com/in/li-li-thomsson-wang-19710403/",
        instagram: "https://www.instagram.com/gonordiclife/"

      }),
    new Member("team", 'Caroline Fermoselle',
      `I joined LifeBonder because connection is at the root of the human experience and this platform facilitates the serendipitous and uncalculated type of interaction that we have lost touch with.`
      , "https://www.lifebonder.com/images/staff/caroline.jpg", "STORYTELLER", "Content Writer/Storyteller", "United States", {}),
    new Member("team", 'Pouyan Hassanzadeh',
      `Visual Designer known for my work in developing successful identity and visual language for multiple brands In the past 10 years. It’s exciting to be part of LifeBonder team and bring the joy of making meaningful and real bonding to others.`
      , "https://www.lifebonder.com/images/staff/pouyan.jpg", "BRAND KNIGHT", "Brand & Visual Designer", "Denmark | Italy",
      {
        linkedin: "https://www.linkedin.com/in/pouyan-hz/",
        instagram: "https://www.Instagram.com/Pouyan.Hz",
        twitter: "https://www.twitter.com/PouyanHz"
      }),
    new Member("team", 'Ana Laudado',
      `I’m very passionate about all things design related, with a big love for challenges. Always trying to venture myself, I've recently moved to a new country. What better way to start bonding than joining a team of wonderful people with a game changer idea?`
      , "https://www.lifebonder.com/images/staff/ana.jpg", "USER INTERFACE WIZARD", "UI/UX & Graphic Designer", "Argentina | Denmark",
      {
        linkedin: "https://www.linkedin.com/in/ana-laudado/",
        behance: "https://www.behance.net/anitalaudado",
        website: "http://anitalaudado.com/"
      }),
    new Member("team", 'Rizka Adelia Maharani',
      `I have been working at a branding agency as a social media content writer. I decided to join LifeBonder as I believe in the use of social media to form genuine and sincere friendships.`
      , "https://www.lifebonder.com/images/staff/adelia.jpg", "MEDIA VISIONARY", "Media Relations", "Indonesia",
      {
        linkedin: "https://www.linkedin.com/in/rizka-adelia-maharani-0b95001a0/",
      }),
    new Member("team", 'Chloe Nash',
      `Having just graduated it seemed fit to start my career at LifeBonder where I can continue to grow and learn while also helping with the next gen social media and the message behind it.`
      , "https://www.lifebonder.com/images/staff/chloe.jpg", "CONTENT WORDSMITH", "Content Writer", "Ireland",
      {
        linkedin: "https://www.linkedin.com/in/chloe-nash-6566a01a6"
      }),
    new Member("team", 'Zoran Karapetrovic',
      `I consider myself a pretty open-minded person who loves exploring and meeting new people. Since we all spend a lot of time on social media, I really liked the idea of bringing the true human connection through technology and LifeBonder is the right way.`
      , "https://www.lifebonder.com/images/staff/zoran.jpg", "CONTENT GURU", "Marketing", "Serbia",
      {
        instagram: "https://www.instagram.com/bugiii95",
        facebook: "https://www.facebook.com/zoran.karapetrovic"
      }),
    new Member("team", 'Sonja Karapetrovic',
      `Alone doesn’t have to mean lonely. The LifeBonder Group provides this opportunity. That’s why I’m here. I’m not alone anymore. I have made new friends with whom I can share love, experience and positive energy.`
      , "https://www.lifebonder.com/images/staff/sonja.jpg", "CONTENT GUARDIAN", "Moderator", "Serbia",
      {
        instagram: "https://www.instagram.com/sofija8967/",
        facebook: "https://www.facebook.com/sonja.arsovskakarapetrovic"
      }),
    new Member("team", 'Alex Kowal',
      `I am an adventurer and lover of the outdoors who is passionate about telling stories through video. I joined LifeBonder team because it’s a social platform that not only connects people online, but also encourages users to meet and build friendships.`
      , "https://www.lifebonder.com/images/staff/alex.jpg", "VIDEO MECHANIC", "Videographer", "United States",
      {
        instagram: "https://www.instagram.com/amckowal/"
      }),
    new Member("team", 'Adrian Hanganu',
      `I am an up and coming digital marketer that is eager for a chance to prove himself. I have joined Lifebonder because of the opportunity of taking part in the new dawn of social media.`
      , "https://www.lifebonder.com/images/staff/adrian.jpg", "DIGITAL DEMIGOD", "Digital Marketer", "Romania",
      {
        linkedin: "https://www.linkedin.com/in/adrian-hanganu-08031aa8",
        instagram: "https://www.instagram.com/adi_hgn/"
      }),
    new Member("team", 'Jennifer Schaller',
      `I’m an experienced storyteller and huge nerd with a massive case of wanderlust. I believe true friendships are everything and I’ve chosen to work with LifeBonder because I believe in social media for good.`
      , "https://www.lifebonder.com/images/staff/jennifer.jpg", "content QUEEN", "Social Media Content Creator", "United States",
      {
        instagram: "https://www.instagram.com/whatthereistosee/?hl=en",
        linkedin: "https://www.linkedin.com/in/jennifer-schaller-456262162/"
      }),
    new Member("team", 'Padmavati Iyer',
      `I am a multi-lingual travel & tea buff with a passion for languages & communication. I joined the LifeBonder team that see the need for genuine friendships in today’s digital era and is driven to help individuals forge such life-altering bonds in a new age social media.`
      , "https://www.lifebonder.com/images/staff/padmavati.jpg", "SOCIAL MARKETING GURU", "Social Media Content Creator", "India | Denmark",
      {
        instagram: "https://www.instagram.com/padma_va_tea/?hl=en",
        linkedin: "https://www.linkedin.com/in/padmavati-iyer-20320b69/"
      }),
    new Member("team", 'Isabel Fuentes Alvarado',
      `I joined LifeBonder to contribute and be part of a team that allows people to connect, create relationships and be able to be truly themselves.`
      , "https://www.lifebonder.com/images/staff/isabel.jpg", "SOCIAL PERFORMER", "Social Media Content Writer", "Guatemala | Denmark",
      {
        linkedin: "https://www.linkedin.com/in/isabel-fuentes-alvarado-55a72590/"
      }),
    new Member("team", 'Suza Spasovska',
      `I wanted to find a group of people who will challenge and inspire me. I LifeBonder I found people I like to spend a lot of time with. I found my kind of people in the LifeBonder Friendship Group and we are here all together because care about each other.`
      , "https://www.lifebonder.com/images/staff/suzi.jpg", "COMMUNITY ALCHEMIST", "Moderator", "Macedonia",
      {
        instagram: "https://www.instagram.com/suzi.spasovska/",
        facebook: "https://www.facebook.com/profile.php?id=100041944007163"
      }),
    new Member("team", 'Iza Hetmanowska',
      `The art of design and creativity has no secrets for me. I joined life bonder because friendship is not about the amount of likes we have under profile pictures.`
      , "https://www.lifebonder.com/images/staff/iza.jpg", "ADOBE WHIZZ-KID", "Graphic Designer", "Poland",
      {
        instagram: "https://www.instagram.com/ipyza/",
        linkedin: "https://www.linkedin.com/in/izabela-hetmanowska-a99942197/",
      }),
  ];

  ngOnInit(): void {
  }

  objectKeys(obj: {}) {
    return Object.keys(obj);
  }

  countSocial(obj: {}) {
    return Object.keys(obj).length;
  }

}
