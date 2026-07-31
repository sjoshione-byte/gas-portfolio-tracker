/* ═══════════════════════════════════════════════════════════════════════════
   SKY RESCUE 707 — SETTINGS
   ---------------------------------------------------------------------------
   Put this file next to sky-rescue-707.html and the game reads it on
   start-up. Everything here is OPTIONAL: delete a line and the game falls
   back to its own default.

   HOW THE TEXT WORKS
   ------------------
     text:    { group: { key: [...] } }   REPLACES the built-in wording
     addText: { group: { key: [...] } }   KEEPS the built-ins and adds yours

   Where a key holds a LIST, the game picks from the whole list — so adding
   your own wordings simply adds variety. Where it holds a single line, your
   line is used as written.

   These stand-ins are filled in for you:
     {n}      the animal being helped        {name}   the pilot's name
     {place}  where this mission is going    {miles}  miles still to go

   After editing, reload the page. Nothing else to do.
   ═══════════════════════════════════════════════════════════════════════════ */

window.SKY_SETTINGS = {

  /* ── WHO IS FLYING ──────────────────────────────────────────────────────
     The age is worked out from the date of birth, and sets the reading
     level, the vocabulary and the sums. */
  profiles:{
    aaries:{ name:'Aaries', dob:'2020-04-16' },
    sushan:{ name:'Sushan', dob:'2016-06-01' }
  },

  /* ── PRAISE, AND "NOT YET" ──────────────────────────────────────────────
     Said constantly, so these two matter more than anything else here.
     Praise the EFFORT, never the child ("you kept going", not "clever boy").
     "Not yet" should leave the door open, never close it. */
  praise: ['Great focus!','You tried so hard!','You kept going!','Your practice is working!','Lovely trying!','You thought hard about that!','Nice thinking!','You stuck with it!'],

  notYet: ['Not yet — try again!','Not yet. Have another go!','Not yet — you are learning!','Not yet. Try once more!'],

  /* ── EVERY OTHER REPEATED LINE, BY WHERE IT IS SAID ─────────────────────
     Below is the game's own wording, written out in full so you can edit it
     in place. Change any line, or add more to any list. */
  text: {

  /* what an animal says at the end of any feelings exercise */
  nvc:{
    understood:[
      'Thank you for listening first. A good friend understands me before they fix me. Being understood helps me most of all.',
      'Thank you. You listened before you helped. Feeling understood helps me even more than mending the problem.',
      'Thank you for hearing me. A good friend understands first. That helps more than fixing it.',
      'Thank you. You understood me. That is the bit that helps most — more than fixing anything.'
    ]
  },
  /* calming, grounding and breathing */
  calm:{
    breathAsk:[
      'My tummy is all fluttery and I cannot settle. I need to feel calm and steady. Will you do belly breathing with me?',
      'Everything feels too fast inside me. I need to be still for a moment. Will you do belly breathing with me?',
      'I am all wound up and my heart is thumping. I need to feel grounded. Will you do belly breathing with me?',
      'I feel wobbly and I cannot get quiet. I need calm. Will you do belly breathing with me?',
      'My thoughts are jumping everywhere. I need to slow right down. Will you do belly breathing with me?'
    ],
    groundIntro:'{n} feels all wound up and fidgety. Wound-up bodies calm down one part at a time. Let us do it together.',
    groundPalm:'Put your palms together with {n}. Feel how warm they are. Press them, then let go.',
    groundFace:'Now your face, with {n}. Let your forehead go soft. Let your jaw go loose.',
    groundLegs:'Now your legs, with {n}. Press your feet down. Feel how strong and steady they are.',
    groundDone:'{n} is not fidgety any more — palms calm, face calm, legs calm. You did it together.',
    resetKind:'That is okay. Getting it wrong means you are learning.',
    resetBack:'You came all the way back.'
  },
  /* taking turns with Pip — kept to the bare minimum on purpose */
  turns:{
    pipTurn:'Pip’s turn. Please wait.',
    yourTurn:'Your turn.'
  },
  /* the journey: how far, and which way */
  journey:{
    distance:'{place} is {miles} miles away.',
    distanceClose:'Almost there! {place} is only {miles} miles away.',
    offCourse:'You are going the wrong way. {place} is {miles} miles behind you now. Follow the red radar.',
    offCourseFar:'You are flying away from {place}. Turn all the way around, and watch the red radar.',
    highFly:'Up high the air is thin, so your plane flies faster. Down low it is slower.'
  },
  /* the weather changing what he travels in */
  vehicle:{
    toCar:'Severe lightning ahead! It is not safe to fly. Land, and drive the rescue car. Swerve left and right, and jump over the bumps.',
    toSki:'A severe snow storm ahead! It is not safe to fly. Land, and put on the rescue skis. Swerve left and right, and jump over the bumps.',
    toPlane:'The weather cleared. Back into the sky, and up high is faster again.',
    carBump:'Careful — go around the buildings, or jump over them.'
  },
  /* reaching an animal */
  rescue:{
    call:'{n} needs help! Fly low. Put your wheels down.',
    missTooHigh:'Too high! Fly lower next time 🛬',
    missClose:'So close! One at a time — catch the next one 💛',
    missSteer:'Steer closer next time ⬅️➡️',
    turnedAway:'{n} You turned away from {name}. Another friend will come 💛'
  },
  /* sharing points */
  share:{
    thanks:'Thank you!',
    notNow:'{n} smiles. "That is okay! Maybe another day."'
  }
  }

  /* ── ADDING WITHOUT REPLACING ───────────────────────────────────────────
     Use addText to KEEP the wordings above and put your own alongside them:

  , addText: {
      nvc:  { understood:['Thank you for staying with me while I felt it.'] },
      calm: { breathAsk: ['I feel jumpy inside. I need to slow down. Will you breathe with me?'] }
    }
  */

  /* ── MORE YOU CAN ADD ───────────────────────────────────────────────────
     Spelling words, your own sums, your own questions, your own situations:

  , spellWords: { y:[['LION','🦁'],['BOAT','⛵']] }
  , extraMath: { y:[{q:'2 + 3 = ?', ans:5, wrong:[4,6,7]}] }
  , extraQuestions: [
      { band:'y', q:'What do we say when someone helps us?',
        ok:'Thank you', wrong:['Nothing','Go away'] }
    ]
  , extraSituations: [
      { tx:'{N} lost their favourite toy.', feeling:'sad', need:'comfort',
        resolution:'Sit with them while they feel sad' }
    ]
  */

  /* ── NUMBERS ────────────────────────────────────────────────────────────
     Any dial from the in-game ⚙️ settings can also be set here, e.g.

  , vehicleFirstSeconds: 70
  , distanceCallSeconds: 75
  , groundPropSpacing: 2.6
  */
};
