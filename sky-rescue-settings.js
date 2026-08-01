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

   Every group below is exactly what the game says somewhere on screen or out
   loud — nothing is left out. Groups are named for WHERE the line is said
   (nvc = the feelings games, shop = the hangar, hazard = trouble in the sky,
   and so on), so you can find a line by remembering roughly when you heard
   it, then Ctrl-F for a word from it.

   Curly-brace stand-ins get filled in for you automatically, per line —
   whatever names appear in a line are the ones that get filled in, for
   example:
     {n}      the animal being helped         {name}   the pilot's name
     {place}  where this mission is going     {miles}  miles still to go
     {score}  current points                  {amt}    an amount of points
     {cost}   what something costs            {pct}    a percentage
   A handful of lines use other names ({calm}, {kind}, {right}, {total}, and
   so on) — the game always fills in every stand-in a line actually uses.

   After editing, reload the page. Nothing else to do.

   NO FILE TO HAND? There is a second way in, for a phone or tablet: in the
   game, open ⚙️ settings → 💬 Words. Every line below is in there too, and it
   can copy the whole lot out as plain "name = wording" text to hand to an AI
   assistant, then take the rewrite straight back. Those edits are saved on
   that one device, and they WIN over this file — so if a line in the game
   does not match what you wrote here, check the Words tab for a device edit,
   or use its "↺ Back to the original words" button to clear them all.
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

  /* ── EVERY LINE THE GAME SAYS, BY WHERE IT IS SAID ──────────────────────
     Below is the game's own wording, written out in full so you can edit it
     in place. Change any line, or add more to any list. This is the WHOLE
     set — every screen, every banner, every spoken line. */
  text: {
  /* what an animal says at the end of any feelings exercise */
  nvc:{
    understood:[
      'Thank you for listening first. A good friend understands me before they fix me. Being understood helps me most of all.',
      'Thank you. You listened before you helped. Feeling understood helps me even more than mending the problem.',
      'Thank you for hearing me. A good friend understands first. That helps more than fixing it.',
      'Thank you. You understood me. That is the bit that helps most — more than fixing anything.'
    ],
    feelCalmTitle:'Help {n} feel calm!',
    landedTitle:'You landed next to {n}!',
    feelQ:'How does {n} feel?',
    needQ:'What would {n} love to have?',
    reqQ:'What will help {n}?',
    ownIdeaBtn:'My OWN kind idea! (+{bonus} extra)',
    ownIdeaTitle:'Make up your own idea!',
    ownIdeaSub:'What is YOUR kind way to help {n}? Kind ideas are the best ideas.',
    ownIdeaPlaceholder:'like: sing {n} a quiet song…',
    ownIdeaCta:'That is my plan! 💡',
    backToList:'← back to the list'
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
    highFly:'Up high the air is thin, so your plane flies faster. Down low it is slower.',
    wrongWayBanner:'🧭 Wrong way! Look at the radar',
    gpsSay:'{place} is {miles} miles away, {dir}. You have flown {flown} miles so far.'
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
    turnedAway:'{n} You turned away from {name}. Another friend will come 💛',
    flewAway:'{n} You flew away from {name}. Another friend will come 💛'
  },
  /* sharing points */
  share:{
    thanks:'Thank you!',
    notNow:'{n} smiles. "That is okay! Maybe another day."',
    earnFirst:'Earn a few points first 💛',
    earnFirstSay:'You have no points yet. Help an animal, then you can share.',
    ask:'Do you want to share some points with {n}?',
    keep:'You have {score}. You would keep {keep}.',
    say:'Use plus and minus to pick how many. Then tap Share. Or tap Not now.',
    shareCta:'💝 Share',
    notNowCta:'Not now 🙂',
    thankCard:'{n} says thank you! 💛'
  },

  /* hello, and picking a mission */
  welcome:{
    prefixAge:'You are {age} years old, and today ',
    prefixNoAge:'Today ',
    body:'you are flying a big plane. It is full of fuel. Now — where shall we fly?',
    cta:'Choose my mission 🗺️'
  },

  /* the job briefing, once a mission is picked */
  mission:{
    sub:'Listen, Captain {name}. Here is your job:',
    acceptCta:'Yes, I will do it! 🫡',
    acceptSay:'Yes, I will do it!',
    readyPrompt:'Now press: Yes, I will do it.',
    newMissionBanner:'🗺️ New mission — {miles} miles',
    goCta:'Let us go! 🛫',
    keepFlyingCta:'Keep flying! ✈️'
  },

  /* the two always-there helpers, taught once before the first take-off */
  orientation:{
    title:'Two buttons you can press ANY time',
    sub:'Captain, remember these two buttons. They are always there. You never have to ask.',
    calmLabel:'press it any time, even when the sky is clear.',
    calmSmall:'Breathe with your bear. It makes storms and dragons stop. It also fills up your CALM dial.',
    hangarLabel:'press it any time to mend your engines and spend your points.',
    hangarSmall:'A broken engine can only be mended in the hangar, with your repairs money.',
    drawerLabel:'pull the tab on the right to see points, stars, and your money.',
    drawerSmall:'CALM and HANGAR are in the drawer too, so you can always find them.',
    cta:'Got it — let’s fly! 🛫',
    ctaSay:'Got it. Let us fly!',
    say:'Press CALM any time. Breathing makes storms stop, and it fills your calm dial. Press HANGAR any time to mend your engines and spend your points. Both buttons are at the bottom of the screen.',
    readyPrompt:'When you are ready, press: Got it, let us fly.',
    takeoffBanner:'🫡 Take off, Captain {name}!',
    takeoffSay:'Off we go, Captain {name}. Everything is loaded. Let us fly.'
  },

  /* the plane check, before every first take-off */
  preflight:{
    title:'Check the plane',
    sub:'Rub the dirty marks off the window. Then hammer the loose nails in.',
    say:'Rub the dirty marks away. Then tap each nail three times to hammer it in.',
    skipCta:'Skip it — fly now',
    cleanLine:'All clean! A clean plane is a lighter plane, and a lighter plane flies faster. You get {pct} per cent more speed.',
    cleanBanner:'✨ All clean — {pct}% faster!',
    skipSay:'You skipped the check. The plane will feel heavy and slow.',
    skipBanner:'⚠️ Skipped — the plane feels heavy'
  },

  /* CALM POWER — picking how to calm a troublemaker */
  calmChooser:{
    title:'CALM POWER!',
    subTrouble:'Trouble in the sky: {list}. A calm brain is stronger than a storm. Pick your calm:',
    subClear:'The sky is clear. This is a good time to practise being calm.',
    breatheLabel:'Breathe with belly-bear',
    breatheAll:' — calm the WHOLE sky, and get {amt} calm',
    breathePractice:' — practise, and get {amt} calm',
    feelingsLabel:'Listen to its feelings — calm one troublemaker',
    codeLabel:'Crack the calm code — calm one troublemaker',
    hint:'💛 Feelings and 🧮 calm codes wake up when trouble comes!',
    backCta:'Back to flying! ✈️'
  },
  /* what happens after a calming exercise finishes */
  calmResult:{
    freezeOneTitle:'{n} is calm now!',
    freezeAllTitle:'Everything went calm…',
    freezeAllBody:'Your slow belly breaths spread all across the sky. The storms went quiet. The dragons yawned. That is how strong calm is.',
    practiceTitle:'Calm practice done!',
    practiceBody:'You practised being calm while the sky was clear. Now it will be easy to find when a storm comes.',
    repairToast:'🧊 +{amt} calm · 🏅 +{pts} points',
    repairSay:'Breathing gave you {amt} calm power, and {pts} points. Off to the hangar.',
    backCta:'Back to the sky! ✈️'
  },

  /* a safe landing, and starting again after a crash */
  landed:{
    title:'Safe landing, Captain!',
    sub:'Your plane is safe on the ground. The hangar can fix engines.',
    hangarLabel:'Go to the HANGAR and fix the engines',
    breatheLabel:'Breathe first, while you wait — earn +{pts} points',
    keepLabel:'Keep flying like this'
  },
  crash:{
    sub:'Your plane glided down and landed with a bump. Everyone is okay. You can pay the crew to fix it, or start again.',
    payLabel:'Pay the crew {cost} points (you have {score})',
    restartLabel:'Start a brand-new adventure (points and stars go back to zero)',
    fixedBanner:'🛠️ All engines fixed!',
    fixedSay:'All fixed! That cost {cost} points. You have {score} points left.',
    freshBanner:'🛫 Fresh start!',
    resetPrompt:'Tap again to start over.',
    resetToast:'↻ Tap again to start over'
  },

  /* the two-way choice mid-flight */
  fork:{
    title:'Two ways to go!',
    sub:'Which way will you fly, Captain?',
    stormLabel:'The Storm Way',
    stormDesc:'bumpy, but a very rare animal needs you (double points!)',
    calmLabel:'The Calm Way',
    calmDesc:'smooth sky, and some quiet breathing (+{pts})',
    stormSay:'The Storm Way. Bumpy, but a very rare animal needs you. Double points.',
    calmSay:'The Calm Way. Smooth sky, and some quiet breathing.',
    stormBanner:'⛈️ Storm way — rare animal, double points!'
  },

  /* teaching the autopilot IF/THEN before a storm */
  autopilot:{
    title:'Teach the autopilot',
    sub:'A storm is coming! Tell the plane what to do BEFORE it starts. Pick the kind, safe THEN for each IF.',
    cta:'Start the autopilot! 🤖',
    onBanner:'🤖 Autopilot on',
    onSay:'{praise} The autopilot knows what to do. Planning first is what calm pilots do.',
    notYetSay:'{notYet} {right} of {total} are right. Have another look.',
    notYetToast:'🤖 {notYet} {right} of {total} are right.'
  },

  /* who is flying, adding a pilot, and resuming a saved flight */
  profile:{
    who:'Who is flying today?',
    addNew:'Add a new pilot',
    newPilotSub:'Age {age} — new pilot, first flight!',
    addTitle:'Add a new pilot',
    addSub:'What is their name, and how old are they? The game picks the right level by itself.',
    addCta:'➕ Add this pilot',
    backCta:'← Back',
    addedToast:'✅ {name} added — age {age}, {band}',
    addedSay:'{name} has been added. Age {age}.',
    typeNameFirst:'Type a name first ✏️',
    addDobOrAge:'Add a date of birth, or an age ✏️',
    typeValidAge:'Type an age between 1 and 18 ✏️',
    welcomeBack:'Welcome back, Captain {name}!',
    resumeSub:'Here is exactly where you stopped.',
    resumeSay:'You have {score} points, {calm} calm, and you have helped {rescues} animals. {place} is {miles} miles away. Shall we keep going?',
    keepFlying:'Keep flying! ✈️',
    settingsFirst:'Settings first ⚙️'
  },

  /* the hangar */
  shop:{
    title:'Hangar',
    brokenHint:'⚠️ {count} engine{s} broken.',
    cleanAgain:'Clean the plane again',
    cleanDirty:'Clean the plane — it is dirty!',
    withdrawLabel:'Take some out of savings',
    shareCta:'💝 Share some points',
    backCta:'Back to the sky! ✈️',
    balancesSay:'You have {repairs} for repairs, {fun} for fun, and {savings} saved up. You need {goal} saved up for the golden plane.',
    splitSay:'You have {repairs} for repairs, {fun} for fun, and {savings} saved up. Here is how it works. Every time you win points, they get shared out for you. {r10} bits out of 10 go to repairs, to mend your plane. {f10} bits go to fun, for paint and stickers. And {s10} bits get saved up for the golden plane.',
    cantAffordToastSavings:'Not enough — but you have savings 🏦',
    cantAffordTitle:'Not quite enough…',
    cantAffordSub:'Your {pot} pot has {have}, and this costs {cost}. You need {short} more. But you have {vault} points saved up! You can take some out if you want to.',
    takeOutCta:'Take some out of savings',
    keepSavingCta:'Keep saving — I will earn it',
    cantAffordToast:'Not enough points yet 💛',
    cantAffordSay:'Not enough points yet. You need {cost} {pot}, and you have {have}. Help one more animal and you will get there.',
    repairMendedSay:'Engine mended! That cost {cost} from your repairs money. You have {left} left.',
    newEngineSay:'A new engine! That cost {cost} from your repairs money. You have {left} left. Your plane is stronger now!',
    paintSay:'New paint! That cost {cost} from your fun money. You have {left} left.',
    stickerSay:'A new sticker! That cost {cost} from your fun money. You have {left} left.',
    vaultSay:'The GOLDEN 707! You saved up, and look what you built!'
  },
  withdraw:{
    title:'Take some out of savings?',
    sub:'You have {vault} points saved up. Your {pot} pot has {now}. How many shall we move across?',
    toRepairs:'🔧 to repairs',
    toFun:'🎉 to fun',
    hint:'💡 Saved points grow by {pct}% every {mins} minutes. Points you take out stop growing.',
    cta:'🏦 Take out',
    leaveCta:'← Leave it saved',
    chooseFirst:'Choose how many first ✏️',
    movedSay:'{amt} points moved from savings to {pot}. You have {vault} still saved up.',
    askSay:'You have {vault} points saved up. You can take some out for {pot} if you need to. Choose how many, then press Take it out.'
  },

  /* the mystery gift that floats by */
  cargo:{
    banner:'🎁 Gift ahead!',
    say:'A surprise gift is floating ahead! Fly into it!',
    title:'Surprise gift!',
    backCta:'Back to the sky! ✈️',
    bigShield:'A BIG shield! Nothing can hurt you for 15 seconds.',
    sticker:'A special sticker! It is on your plane already.',
    bagTitle:'A bag of {amt} points!',
    bagSub:'Where do you want to put it, Captain?',
    repairsLabel:'Repairs — to mend engines when they break',
    funLabel:'Fun — for paint and stickers',
    saveLabel:'Save it — it GROWS by {pct}% every {mins} minutes',
    bagSay:'Repairs, to mend your engines. Fun, for paint and stickers. Or save it, and it grows all by itself every {mins} minutes.',
    depositBanner:'💰 +{amt} → {pot}',
    depositSavedSay:'{amt} points saved. Good thinking! Every {mins} minutes it grows a bit more, all by itself.',
    depositOtherSay:'{amt} points into your {pot} pot.'
  },

  /* interest paid on savings */
  bank:{
    noneSaved:'🏦 Save points to grow them!',
    noneSavedSay:'Savers get a surprise. You have nothing saved yet. Save some points, and they grow all by themselves.',
    grewBanner:'🏦 Savings grew +{amt}!',
    grewSay:'Good news! You saved your points, so the bank gave you {amt} more.'
  },
  /* the calm glow and kindness rings that soak up a hit */
  glow:{
    kindShieldToast:'💛 Kindness shield up!',
    kindShieldSay:'The kindness you gave away came back to keep you safe.',
    calmStatus:'🧊 Calm {calm} of {max} — the glow keeps you safe',
    calmGain:'🧊 +{n} CALM POWER{why}! Now you have {calm}.'
  },
  /* shared kindness returning as a surprise */
  karma:{
    repairBanner:'💛 A repair crew came! Engine fixed.',
    repairSay:'The animals you shared with sent a crew to fix your engine!',
    shieldBanner:'💛 A gift shield!',
    shieldSay:'The animals you shared with sent a shield to keep you safe!'
  },
  /* hazards arriving, warning, leaving and returning */
  hazard:{
    animalBanner:'🆘 {name} ahead — {hint}',
    lookOut:'Look out! {nm} is coming!',
    rocketBanner:'⚠️ ROCKET! Go up or go down! 🚀',
    rocketSay:'A rocket is coming! Go up high, or dive down low!',
    sunBanner:'🌞 HOT SUN! GO DOWN ⬇️',
    sunSay:'Hot sun! Dive down low, quickly!',
    arriving:'{em} {nm} is coming!',
    floatedAway:'{em} {nm} floated away.',
    comingBack:'{em} {nm} is coming back!'
  },
  /* taking a hit */
  hit:{
    calmTook:'🧊 Your calm took the hit! ({calm} left)',
    kindTook:'💛 Kindness took the hit! ({kind} left)',
    bumpWarn:'💥 Bump! One more and an engine breaks ({strike}/{need})',
    bumpWarnSay:'Careful! One more bump and an engine breaks.',
    engineBreak:'💥 {breakLine} {engines}/{engineSlots} left',
    engineBreakSay:'{breakLine} The hangar can fix it, with points.'
  },
  /* the autopilot rule actually firing */
  autopilotEvt:{
    saved:'🤖 Autopilot saved you!',
    savedSay:'Autopilot dived low, just like you planned!',
    flareDodged:'🌞 Great dive! The hot sun went over you!'
  },
  /* looking at the view, and boost being locked */
  view:{
    cockpitOn:'🧑‍✈️ Inside the plane — watch your dials, captain!',
    cockpitOff:'✈️ Behind the plane'
  },
  boost:{
    locked:'🛞 Wheels are down — no boost',
    lockedSay:'Your {act} are down. Boost does not work now.'
  },
  /* the reset exercise after three misses */
  reset:{
    breatheIntro:'Let us breathe slowly together.',
    bodyIntro:'Let us feel our body for a moment.',
    breatheIn:'Breathe in.',
    breatheOut:'And out.',
    oneMoreRound:'Good. One more time around. Feet again.'
  },
  /* small games: memory, piano, tic-tac-toe, and the drawing game */
  minigame:{
    memoryHint:'Tap two cards. Find the two that match.',
    pianoYourTurn:'Your turn. Follow the note names.',
    bongoYourTurn:'Your turn. Watch the hand on each drum.',
    listenAgain:'Listen again.',
    drawFirst:'✏️ Draw something first!',
    tttIntro:'Tic tac toe with Pip. You are the crosses. You go first.',
    tttWin:'You won! Well played, friend, says Pip.',
    tttLose:'Pip won this one. Good game! Every game makes you a bit better.',
    tttDraw:'A draw! That was a fair game, says Pip.'
  },
  /* the belly-breathing exercise with the teddy */
  teddyBreath:{
    ready:'Lie back. Put your teddy, or this phone, on your tummy. I will help you breathe. Ready?',
    in:'Breathe in… let your tummy go up… the bear goes up too…',
    out:'Breathe out… slowly… the bear rides down…',
    lovely:'Lovely. Keep going, just like that.',
    realBonusToast:'📱 Real tummy breaths! +{amt}'
  },
  /* practice rounds on the piano and the bongos */
  practice:{
    roundLabel:'Practice round {round} of {need}',
    extraLabel:'🔁 Extra practice {n}',
    doneTitle:'That is both rounds!',
    extraTitle:'Played again!',
    doneSub:'You have practised {name} twice. Play it once more if you would like to, or finish here and take your points.',
    extraSub:'{n} extra round{s} done, all your own choice. Go again, or finish here.',
    moreCta:'🔁 Practise it once more',
    doneCta:'✅ I am done — finish',
    bonusLine:'and {n} extra practice round{s}, because you chose to'
  },

  /* leaving the destination, and picking the next one */
  arrival:{
    newMissionCta:'Fly a NEW mission 🛫',
    stayCta:'Stay a bit longer ✈️',
    thanksSay:'Thank you, Captain. Thank you for not giving up.'
  },
  missionPicker:{
    title:'Pick your mission, Captain',
    sub:'Where will you fly today?',
    cta:'Pick a mission, then take off 🛫',
    ctaChosen:'Take off on this mission! 🛫'
  }
}

  /* ── ADDING WITHOUT REPLACING ───────────────────────────────────────────
     Use addText to KEEP the wordings above and put your own alongside them:

  , addText: {
      nvc:  { understood:['Thank you for staying with me while I felt it.'] },
      calm: { breathAsk: ['I feel jumpy inside. I need to slow down. Will you breathe with me?'] }
    }
  */

  /* ── CONTENT: the bigger lists behind the games ─────────────────────────
     These are not single lines of wording — they are the ACTUAL puzzles,
     hazards, rewards and vocabulary the game draws from. Same two-verb
     pattern as text/addText:

       content:    { name: [...] }   REPLACES the whole list
       addContent: { name: [...] }   KEEPS the built-ins and adds yours

     Available names, and the shape each item needs:

       situations      — the NVC feelings scenarios (33 built in)
                          { tx:'{N} lost a toy.', feeling:'sad', need:'comfort',
                            resolution:'Give a hug and help look for it' }
                          {N} becomes the animal's name automatically.
                          feeling is one of: sad, scared, mad, tired, mixed, happy
                          need is one of: comfort, connection, safety, encouragement,
                            fairness, being_heard, autonomy, rest, understanding

       hazDefs         — the sky hazards (9 built in: eagle, storm, dragon, jet,
                          hurricane, asteroid, sat, missile, flare)
                          { id:'eagle', em:'🦅', lvl:1, size:45, kind:'homing',
                            spd:55, nm:'Skye the eagle', fam:'tired',
                            story:'Skye has been flying all day...' }
                          kind is one of: homing, straight, fall, storm, push, flare

       vaultRewards    — what the calm-code maths game can win (9 built in)
                          ['pudding','🍰','a slice of berry cake']

       talkRounds      — turn-taking conversation prompts (3 built in)

       pianoTunes      — the piano tunes to learn, each with a teaching tip
                          (9 built in)
                          { name:'Hot Cross Buns', notes:[4,2,0,4,2,0],
                            tip:'E D C, twice. Three white keys side by side.' }
                          notes are positions on the keyboard, 0 = middle C
                          counting every key, black ones included, up to 12.

       bongoBeats      — the bongo rhythms (8 built in, including the martillo,
                          the first beat real bongo players are taught)
                          { name:'Boom and Tap', notes:[0,1,0,1], hands:'LRLR',
                            tip:'Big drum, small drum, over and over.' }
                          notes: 0 = BOOM (big drum), 1 = TAP (small drum),
                          2 = SLAP (the edge). hands is one letter per note,
                          L or R, and MUST be the same length as notes.

       trizPuzzles     — the pattern/thinking puzzles (12 built in)

       jigsaws         — the jigsaw pictures (10 built in)
                          { em:'🦁', name:'a lion' }

       mcqTopics       — the thinking-question topics (4 built in), each with
                          several right answers and a pool of wrong ones

       apRules         — the autopilot IF/THEN rules taught before a storm
                          (3 built in)

       resolutionWrong — wrong-answer options offered alongside the real
                          resolution in the NVC "what will help" step (8 built in)

       sayWords        — spelling words, BY AGE BAND (t/y/m/o)

       feelingSyns     — extra words for each feeling, BY AGE BAND, so the
                          "how do they feel?" choices are not always the same
                          word — { sad:{ y:['sad','unhappy',...] }, ... }

       needSyns        — extra words for each need, BY AGE BAND, same shape

     Example — one extra hazard on top of the built-in nine, one extra bongo
     beat, and the jigsaw pictures replaced entirely with your own three:

  , addContent: {
      hazDefs: [
        { id:'blizzard', em:'🌨️', lvl:3, size:60, kind:'push', spd:20,
          nm:'Blizzard the snowstorm', fam:'mixed',
          story:'Blizzard wants to play, but blows too hard for anyone to join in.' }
      ],
      bongoBeats: [
        { name:'Slap Happy', notes:[1,2,1,2], hands:'RLRL',
          tip:'Tap then slap, tap then slap. Hands taking turns.' }
      ]
    }
  , content: {
      jigsaws: [ {em:'🐘',name:'an elephant'}, {em:'🚂',name:'a train'}, {em:'🌈',name:'a rainbow'} ]
    }
  */

  /* ── MORE YOU CAN ADD ───────────────────────────────────────────────────
     Spelling words, your own sums, your own questions, your own situations.
     (An older, simpler way to ADD to three of the lists above — these only
     add, never replace; use content/addContent for that.)

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

  , patternRounds: 2      // practice rounds to finish the piano
  , bongoRounds: 2        // ...and the bongos
  , practiceBonus: 5      // points for each EXTRA round he chooses to play
  , vehicleFirstSeconds: 70
  , distanceCallSeconds: 75
  */
};
