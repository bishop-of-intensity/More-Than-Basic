var stopLoad1 = 0;
var stopLoad2 = 0;
var stopLoad3 = 0;
var stopLoad4 = 0;
var stopLoad1_portrait = 0;
var stopLoad2_portrait = 0;
var stopLoad3_portrait = 0;
var stopLoad4_portrait = 0;

const main = $('#main');
var link;
const links = {
    github: 'https://github.com/bishop-of-intensity',
    instagram: 'https://www.instagram.com/bishop_of_intensity/',
    youtube: 'https://www.youtube.com/watch?v=dHlEkDS2e3Y&list=PLsQAu16Tm0oeWber2C34rY2CPb9NAnA-z&index=1',
    AEQ: 'https://bishop-of-intensity.github.io/An-Epic-Quest/'
}



// REDIRECT_LINKS
$('#main').click(function(e) {
    if (e.target.id === 'github') {
        link = links.github;
    } else if (e.target.id === 'youtube') {
        link = links.youtube;
    } else if (e.target.id === 'instagram') {
        link = links.instagram;
    } else if (e.target.id === 'AEQ') {
        link = links.AEQ;
    }
    if (e.target.classList.value === 'redirect-icon-svg') {
        var win = window.open(link, '_blank');
        win.focus();
    }
});



// SECTION-EXPANDER
$('.parent .expander-p-container').click(function() {
    if(!$(this).parent().hasClass('main-section-expanded-p')) {
        $(this).parent().addClass('main-section-expanded-p');
    } else {
        $(this).parent().removeClass('main-section-expanded-p');
        $(this).parent().children('.main-content-container').removeClass('main-section-expanded');
        $(this).parent().children('.main-content-container')
        .children('.main-content-container').removeClass('main-section-expanded');

    }
});
// $('.expander').click(function() {
//     if(!$(this).parent().hasClass('main-section-expanded')) {
//         $(this).parent().addClass('main-section-expanded');
//     } else {
//         $(this).parent().removeClass('main-section-expanded');
//     }
// });
$('.expander').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
    }
});

// $('.expander-lvl-2').click(function() {
//     if(!$(this).parent().hasClass('main-section-expanded')) {
//         $(this).parent().addClass('main-section-expanded');
//     } else {
//         $(this).parent().removeClass('main-section-expanded');
//     }
// });

$('.expander-lvl-2').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
    }
});

$('.close-all').click(function() {
    $(this).parent().children().removeClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
    // if(!$(this).parent().parent().hasClass('main-section-expanded')) {
    //     $(this).parent().parent().addClass('main-section-expanded');
    // } else {
    //     $(this).parent().parent().removeClass('main-section-expanded');
    // }
});


// setTimeout(function() {
//     $('#arm-wrestling_wrapper').addClass('loaded');
// }, 1000)

// $('.AW-Minimize').click(function() {
//     $(this).parent().parent().addClass('AW-closed');
//     $(this).parent().parent().removeClass('AW-expanded');
// });

// $('.AW-Maximize').click(function() {
//     $(this).parent().parent().removeClass('AW-closed');
//     $(this).parent().parent().addClass('AW-expanded');
// });

// $('.AW-link').click(function() {
//     window.open('https://andrei-pascu.github.io/Arm-Wrestling/', '_blank');
// })




// EXERCISE-VARIATIONS_LIST-DISPLAY
$('.dumbbells').click(function() {
    if(!$(this).parent().parent().hasClass('dumbbells')) {
        $(this).parent().parent().addClass('dumbbells');
    } else {
        $(this).parent().parent().removeClass('dumbbells');
    }
});
$('.machines').click(function() {
    if(!$(this).parent().parent().hasClass('machines')) {
        $(this).parent().parent().addClass('machines');
    } else {
        $(this).parent().parent().removeClass('machines');
    }
});
$('.barbells').click(function() {
    if(!$(this).parent().parent().hasClass('barbells')) {
        $(this).parent().parent().addClass('barbells');
    } else {
        $(this).parent().parent().removeClass('barbells');
    }
});
$('.bodyweight').click(function() {
    if(!$(this).parent().parent().hasClass('bodyweight')) {
        $(this).parent().parent().addClass('bodyweight');
    } else {
        $(this).parent().parent().removeClass('bodyweight');
    }
});








var selectedExercise;
var targetedExercise;
var DB;
var clickHistory1;

$('.exercise-section').click(function(e) {
    if(!!e.target.id && e.target.className == 'list-my-choices') {
        if (clickHistory1 !== undefined) {
            clickHistory1.removeClass('selected-exercise');
        }
        clickHistory1 = $(e.target);
        $(e.target).addClass('selected-exercise');

        targetedExercise = e.target.id;
        db = exerciseDB[targetedExercise];
        $('.details-overlay #name').text(db.name);
        $('.details-overlay #group1').text(db.group1);
        $('.details-overlay #group2').text(db.group2);
        $('.details-overlay #focus').text(db.focus);
        $('.details-overlay #joints').text(db.joints);
        $('.details-overlay #type').text(db.type);
        $('.details-overlay #details').text(db.details);
        if($('.details-overlay').hasClass('closed')) {
            $('.details-overlay').removeClass('closed');
        }
    }
})
$('#close-details').click(function() {
    $(this).parent().parent('.details-overlay').addClass('closed');
    $('.list-my-choices').removeClass('selected-exercise');
});
// $('.list-my-choices').click(function() {
//     $(this).addClass('selected-exercise')
// });

var exerciseDB = {
    oneArmPushup: {
        name: '1 Arm Pushup',
        group1: 'Triceps',
        group2: 'Chest, Front Shoulder',
        focus: 'Make It Make Sense',
        joints: 'Shoulder',
        type: 'Press',
        details: "The 0.5 Stands For 'Other Arm Assists' (Check The Next Section 'Progression' For Details). Twist Your Torso Slightly Towards The Working Arm When Descending, Get Back Your Shoulders Parralel To The Ground When Ascending."
    },
    HandstandPushups: {
        name: 'Handstand Pushup',
        group1: 'Shoulders',
        group2: 'Triceps',
        focus: 'Driving "The Weight" Back',
        joints: 'Shoulders, Elbows',
        type: 'Press',
        details: '"Vertical Pushups", from a horizontal ass up V position, to same but incline, to full vertical (at the wall) pushups.'
    },
    PM1: {
        name: '[PM1] Outside Shoulder Grip',
        group1: 'Chest',
        group2: 'Front Delt, Triceps',
        focus: 'Distal Mid-Low',
        joints: 'Elbows, Shoulders',
        type: 'Pushup',
        details: 'Elbows 60 deg tuck, a wide enough stance so that on lockout you feel the chest contracting. --- Variations: Wall, Bench, Ground.'
    },
    PM2: {
        name: '[PM2] Wall Lateral Fly 1 Arm',
        group1: 'Chest',
        group2: 'Front Delts, Triceps',
        focus: 'Squeezing The Inner Mid/Low Chest',
        joints: 'Shoulders',
        type: 'Pushup Variation',
        details: "At the wall corner or door casing. Arm extened laterally (not quite locked out) on the wall. Bring the arm inside, your trunk will rotate toward the working arm. --- Variations: Wall, Bench, Ground."
    },
    PA1: {
        name: '[PA1] Incline Wide Partials',
        group1: 'Chest',
        group2: 'Front Delts',
        focus: 'Distal Upper',
        joints: 'Shoulders',
        type: 'Pushup',
        details: 'Elbows Are Flared Out. No lockout, no touching the ground with the chest so that you protect your shoulders and isolate the upper chest, less front delt work.'
    },
    PA2: {
        name: '[PA2] Wall Partial 1 Arm',
        group1: 'Chest',
        group2: 'Front Delts, Triceps',
        focus: 'Squeezing The Inner Upper Chest',
        joints: 'Elbows',
        type: 'Pushup Variation',
        details: 'Start - trunk inward rotation, Movement end trunk outward rotation. The essential part is close to lockout, where you work the inner upper chest hard.'
    },
    PTr: {
        name: '[PTr] On Shoulder Width Grip',
        group1: 'Triceps',
        group2: 'Front Delts',
        focus: 'Elbow Positioning',
        joints: 'Shoulder, Elbows',
        type: 'Pushup',
        details: 'Elbows near the body, from mid->top push slightly with your toes, this will lessen some of the tricep-tendon load, do the opposite on mid->low so that the triceps is more loaded than the shoulders.'
    },
    triExt: {
        name: 'Tricep Extension - OH',
        group1: 'Triceps',
        group2: '_',
        focus: 'Stretch & Contraction',
        joints: 'Elbows',
        type: 'Isolation',
        details: "The opposite arm basically in a pullup stance. it pulls the working arm behind your head till your triceps is completely stretched. You don't need to lockout, just full stretch to mid-top."
    },
    LatR: {
        name: 'Lateral Raise',
        group1: 'Lateral Delts',
        group2: 'Rear Delts, Front Delts',
        focus: 'Having Enough Range Of Motion',
        joints: 'Shoulders',
        type: 'Isolation',
        details: 'Hammer Grip of the cloth, concentrate and find how to move in order to get the most ROM possible & contraction throught the movement.'
    },
    ShadowSa: {
        name: 'Padded/Shadow 👊',
        group1: 'Shoulders, Traps',
        group2: 'Triceps, Abs, Biceps, Front-Forearms',
        focus: 'Imagining Actually Hitting Someone Real',
        joints: 'Shoulders',
        type: 'Conditioning',
        details: '(Jabs, Crosses, Hooks) "Padded", hold the cloth in the opposite arm or shadow box (hit the air), and hit it with these 3 techniques. You can freestyle, or you can repeat certain strikes several times in a row in order to perfect each one of them. Imagine a taller opponent than you.'
    },
    ShadowSb: {
        name: 'Padded/Shadow 👊',
        group1: 'Shoulders, Traps',
        group2: 'Triceps, Abs, Biceps, Front-Forearms',
        focus: 'Imagining Actually Hitting Someone Real',
        joints: 'Shoulders',
        type: 'Conditioning',
        details: '"Padded", hold the cloth in the opposite arm or shadow box (hit the air), and hit it with these uppercuts. Hit the air hook/uppercut, but use the shoulder&&arm muscles minimally, instead push with the body and especially the back (lats).'
    },
    BareBox: {
        name: '👊 To 👊',
        group1: 'Fist Muscles',
        group2: '_',
        focus: 'focusOn Volume',
        joints: 'Wrist',
        type: 'Fighting',
        details: 'Arms in front of you, lightly bash your fists together, go for higher reps (50-100-200) at least in the beginning, than you can hit harder.'
    },
    P1Jumps: {
        name: '1 Leg - Jumps',
        group1: 'Calves',
        group2: 'Glutes, Quads',
        focus: 'Coordination',
        joints: 'Knees',
        type: 'Power',
        details: 'X/Z --- X.Raised-Heel 1. Minimal Jumps, 2. Some More Knee & Hip Flex, 3. Even More Knee & Hip Flex. --- Z.Heel-Gets-To-Floor 4. Quarter Squat, 5. Half Squat.'
    },
    LegStrikes: {
        name: 'Knees, Kicks',
        group1: 'Quads',
        group2: 'Glutes',
        focus: 'Go Deep',
        joints: 'Hips, Knees',
        type: 'Fighting',
        details: "Imaginary Grabbing Of Head & Knee Strikes --- Low/Medium/High Lateral Kicks --- Front Shove Kick, Put Your Weight Into It, Like A Big Step (so that there is momentum for a following fist)."
    },
    BackLounges: {
        name: 'Deep Back Lounges',
        group1: 'Glutes',
        group2: 'Quads',
        focus: 'Go Deep',
        joints: 'Hips, Knees',
        type: 'Isolation',
        details: 'As Much Hip Flexion As Possible --- Helpers: Hold Onto A Bench, Use The Opposite Leg To Support The Movement.'
    },
    SWideSquat: {
        name: 'Lateral Lounges',
        group1: 'Abductors',
        group2: 'Glutes, Hamstrings',
        focus: 'Coordination',
        joints: 'Hips, Knees',
        type: 'Strength-Mobility',
        details: "Go From Side To SIde, Heel To Heel --- Thighs & Knees -> point in the same direction as the tips of the feet. --- Knees Pushed To The Outside. Knees Don't Cave In!!"
    },
    PJumps: {
        name: 'Jumps',
        group1: 'Calves',
        group2: 'Glutes, Quads',
        focus: 'Zone-ing Out',
        joints: 'Knees',
        type: 'Conditioning',
        details: 'Just like that, rope jumping with no rope and less shoulders, arms and traps fatigue. --- Add Direction Changes, Move'
    },



    PullU: {
        name: 'Pulldowns - Upper',
        group1: 'Back',
        group2: '_',
        focus: 'Teres Major, Upper Lats',
        joints: 'Teres Major',
        type: 'Pulldown',
        details: '(Can Also Be Done 1 Armed) On your knees, facing a raised platform, hands (wrists, fists) on the platform (like a bed/chair), hips raised until 45-60-deg knee bend, torso almost paralel to the ground, arms above your head. Pulldown till your arms are perpendicular to your body, hips will come forward, come back, fully stretching your back.'
    },
    PullM: {
        name: 'Pulldowns - MidLow',
        group1: 'Back',
        group2: '_',
        focus: 'Lats, Mid-Back',
        joints: 'Lower Back',
        type: 'Pulldown',
        details: '(Can Also Be Done 1 Armed) Imagine Doing A Heavy Mid->Top Pullup Partial. On your knees, facing a raised platform, forearms (weight on elbows) on the platform (like a bed/chair), hips raised until 30-60-deg knee bend, torso 45-deg to the ground, arms higher than perpendicularto your body. Pulldown till your lats are fully contracted and you can pull no more, or your arms are perpendicular to the ground, hips will come forward, come back to the initial position.'
    },
    RowLateral: {
        name: 'Row: 1 Arm',
        group1: 'Back',
        group2: '_',
        focus: 'Lats, Mid-Back',
        joints: '_',
        type: 'Row',
        details: 'On knees (adjust height by wide/narrow leg position), Lateral to sitting furniture, Pull on the forearm. Start "at the top"  - Huge Hook position, arm back loading the strike. Move  - get your body back & top again. Movement direction -> row + pull apart. Top shoulder forward (towards top), shoulder gets back (towards bot).' 
    },
    Traps: {
        name: 'Traps - Hand Stand',
        group1: 'Trapezoid',
        group2: '_',
        focus: 'Squeezing The Shoulder Blades',
        joints: 'Shoulder Blades',
        type: 'Isolation',
        details: 'Hands on the ground, your trunk and legs form a 45deg Bend (you can bend your knees). From this position, with your shoulders lowered, rasie your shoulders until your trapezoid is fully contracted. *If this stance is much too easy (before this increase the tempos than decide), do it in a handstand.'
    },



    CurlE1: {
        name: 'Inner Biceps Curl',
        group1: 'Bicep',
        group2: '_',
        focus: 'Heavy Load',
        joints: 'Elbows, Shoulders',
        type: 'Strength',
        details: "Supinated grip, elbow resting deep inside the torso, upper back bent forwards. Movement, from an outer position (bottom, not full extended) -> Hand To the opposite side of your head (fully flexed)."
    },
    CurlE2: {
        name: 'Hammer Biceps Curl',
        group1: 'Bicep',
        group2: '_',
        focus: 'Full ROM',
        joints: 'Lower Biceps, Wrists',
        type: 'Isolation',
        details: "Hammer grip, elbow resting on your torso, torso slightly bent beckwards so when fully stretched your arm doesn't reach perpendicular to the ground. Do full rom."
    },
    CurlE3: {
        name: 'Outer Biceps Curl',
        group1: 'Bicep',
        group2: '_',
        focus: 'Full ROM',
        joints: 'Lower Biceps, Wrists',
        type: 'Isolation',
        details: "Arm Situated Towards The Outside, Keep That Position. Supinated grip, elbow resting on your torso, torso slightly bent beckwards so when fully stretched your arm doesn't reach perpendicular to the ground. Do full rom."
    },
    CurlE4: {
        name: 'Biceps Curl Bottom Partial',
        group1: 'Lower Bicep',
        group2: '_',
        focus: 'Stretch',
        joints: 'Lower Biceps, Wrists',
        type: 'Isolation',
        details: "Supinated grip, elbow resting on your torso, torso slightly bent beckwards so when fully stretched your arm doesn't reach perpendicular to the ground. Rom (0->25%)."
    },
    CurlE5: {
        name: 'Biceps Pronated Curl',
        group1: 'Brachioradial',
        group2: '_',
        focus: 'Stretch',
        joints: 'Lower Biceps, Wrists',
        type: 'Isolation',
        details: "Fully Pronated Hand, Full Reps / 25%-75%."
    },


    CurlL1: {
        name: 'Outer Biceps Leg Curl',
        group1: 'Peak Biceps',
        group2: '_',
        focus: 'Top Contraction',
        joints: 'Wrists',
        type: 'Strength, Isolation',
        details: 'Arm /w opposite leg. Grab your leg where you would put the cloth (under the thigh, above the knee, weight on the wrist). Bent forwards. From a hammer position curl to a supinated fist moving your forearm away from your body.'
    },
    CurlL2: {
        name: 'Hammer Biceps Leg Curl',
        group1: 'Peak Biceps',
        group2: '_',
        focus: 'Top Contraction',
        joints: 'Wrists',
        type: 'Strength, Isolation',
        details: 'Arm /w opposite leg. Grab your leg where you would put the cloth (under the thigh, above the knee, weight on the wrist). Bent forwards. Hammer Curls.'
    },
    CurlL3: {
        name: 'Inner Biceps Leg Curl',
        group1: 'Peak Biceps',
        group2: '_',
        focus: 'Top Contraction',
        joints: 'Wrists',
        type: 'Strength, Isolation',
        details: 'Arm /w opposite leg. Grab your leg where you would put the cloth (under the thigh, above the knee, weight on the wrist). Bent forwards. Supinated Grip move your forearm towards your body.'
    },



    WF1: {
        name: 'Wrist Hammer Flex',
        group1: 'Forearm',
        group2: '_',
        focus: 'Minimal Wrist Pain',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Hammer Grip + The Cloth Comes From Above The Index Finger. Flex The Wrist.'
    },
    WF2: {
        name: 'Wrist Curl',
        group1: 'Forearm',
        group2: '_',
        focus: 'Minimal Wrist Pain',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Supinated Grip, Flex Hand.'
    },
    WF3: {
        name: 'Wrist Curl + Pronation',
        group1: 'Forearm',
        group2: '_',
        focus: 'Minimal Wrist Pain',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Cloth On The Top Of The Index Metacarpal, Flex + Pronate Hand.'
    },
    WF4: {
        name: 'Wrist Pronation',
        group1: 'Forearm',
        group2: '_',
        focus: 'Minimal Wrist Pain',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Cloth Between Thumb & Index + Cloth Comes From Outside The Arm. Pronate Hand.'
    },
    WF5: {
        name: 'Wrist Outer Supination',
        group1: 'Forearm',
        group2: '_',
        focus: 'Minimal Wrist Pain',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Cloth Between Thumb & Index + Cloth Comes From Inside The Arm. From Full Pronation To Neutral Or More.'
    },


    WB1: {
        name: 'Wrist Inner Supination',
        group1: 'Forearm',
        group2: '_',
        focus: 'Peak Contraction',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Cloth On The Top Of The Pinkie Metacarpal, Flex + Supinate Hand.'
    },
    WB2: {
        name: 'Wrist Hammer Extend',
        group1: 'Forearm',
        group2: '_',
        focus: 'Peak Contraction',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Hammer Grip + The Cloth Comes From Above The Pinkie Finger. Extend The Wrist.'
    },
    WB3: {
        name: 'Wrist Outside Curl',
        group1: 'Forearm',
        group2: '_',
        focus: 'Peak Contraction',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Supinated grip, flex hand, keep the wrist towards the outside. Contract At The Top.'
    },
    WB4: {
        name: 'Wrist Extension',
        group1: 'Forearm',
        group2: '_',
        focus: 'Mid Contraction',
        joints: 'Wrists',
        type: 'Isolation',
        details: 'Pronated grip, extend hand, keep your hand facing your body. Contract At The Top.'
    },
    WB5: {
        name: 'Finger Flexion',
        group1: 'Hand',
        group2: '_',
        focus: '',
        joints: 'Fingers',
        type: 'Isolation',
        details: 'Grab all your fingers with the opposite arm, spread you fingers apart (this can be done as partials, from a closed hand to fully extended fingers).'
    },
    WB6: {
        name: 'Finger Flexion',
        group1: 'Hand',
        group2: '_',
        focus: '',
        joints: 'Fingers',
        type: 'Isolation',
        details: 'Elbows Up, Hold Cloth End With One Arm, The Other Uses The Loop To Flex The Fingers. Put More Tension By Pullin With The Other Arm.'
    },



    LarRR: {
        name: 'Lateral Rear Raise',
        group1: 'Rear Delts',
        group2: 'Traps',
        focus: 'Full Muscle Contraction',
        joints: 'Shoulder Blades',
        type: 'Isolation',
        details: 'Pronated Grip, Trunk bent 30-deg, Opposite hand leaning on the wall, row / raise while keeping the working arm at a 45-deg tuck. Make sure to squeeze and feel the muscle at the top end of the movement. For More ROM at the bottom, cross your leg forward.'
    },
    Neck: {
        name: 'Neck Movements',
        group1: 'Neck',
        group2: 'Upper Traps',
        focus: 'Make The Movement Feel Natural',
        joints: 'Neck Strains',
        type: 'Isolation',
        details: 'These Are 3 parts, flexion, lateral and extension (backwards). Flexion, Press Your Fists Into Your Chin, Max Flex -> Head Bent Backwards. Lateral, Hold over the side of your head, lower and raise, for both sides. Extension, both arms behind your neck/head, bend your head forwards then extend.'
    },
    TrunkM: {
        name: 'Standing Trunk Movement',
        group1: 'Abs',
        group2: 'Lower Back (Lombar)',
        focus: 'The 3 Ways',
        joints: 'Lower Back',
        type: 'Conditioning',
        details: 'Standing, 1 leg forward fighting stance. Keep Lower Back Spine Neutral.  ___2 Ways___, #1,#2 (one for each rotated side), bend &/ rotate (just from your abs not hips) your torso forwards, go back straight, bend &/ rotate backwards.'
    },
    AbsV: {
        name: 'V Ups',
        group1: 'Abs All',
        group2: '_',
        focus: 'Lower Back Continuously Crunched',
        joints: 'Lower Back, Front Hip',
        type: 'Compound',
        details: 'Ass On Bench, Legs Lower Than The Bench. Execute both straight and rotated reps. Adjust Dificulty By How Far The Feet & Knees Are From The Body.'
    },
    Abs45: {
        name: 'Abs - 45deg',
        group1: 'Abs (Rectus)',
        group2: 'Obliques',
        focus: 'Abdominal Belt Continuously Flexed',
        joints: 'Lumbar Vertebrae',
        type: 'Isolation',
        details: 'Feet at 90-deg on a raised platform. Lower back curved the other way than usual. Hands behind your head raise the front side of your torso till your abs are fully contracted. You can raise it straight &/ rotating to the sides.'
    }
}











// Lazy Loads
// $('body').scroll(function() {
//     var top = $('body').scrollTop();
//     if (top > 500) {
//     } else {
//     }

//     if (top > 100 && stopLoad1 === 0) {
//     }


//     if ((window.matchMedia("(orientation: portrait)").matches) && (top > 800) && (stopLoad2_portrait === 0)) {
//         stopLoad2_portrait = 1;
//     }
//     if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 550) && (stopLoad2 === 0)) {
//         stopLoad2 = 1;
//     }


//     if ((window.matchMedia("(orientation: portrait)").matches) && (top > 4000) && (stopLoad3_portrait === 0)) {
//         stopLoad3_portrait = 1;
//     }
//     if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 2000) && (stopLoad3 === 0)) {
//         stopLoad3 = 1;
//     }


//     if ((window.matchMedia("(orientation: portrait)").matches) && (top > 5000) && (stopLoad4_portrait === 0)) {
//         stopLoad4_portrait = 1;
//     }
//     if ((!window.matchMedia("(orientation: portrait)").matches) && (top > 4000) && (stopLoad4 === 0)) {
//         stopLoad4 = 1;
//     }
// });

// $('.scroll-to-top').click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 3000);
// });

