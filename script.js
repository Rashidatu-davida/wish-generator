const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");

const userName = document.getElementById("userName");
const photoUpload = document.getElementById("photoUpload");
const generateBtn = document.getElementById("generateBtn");

const displayName = document.getElementById("displayName");
const resultImage = document.getElementById("resultImage");
const heartIcon = document.getElementById("heartIcon");
const wishText = document.getElementById("wishText");

const themes = [
    {
        key: "birthday",
        title: "✨ Birthday Wish Generator"
    },
    {
        key: "christmas",
        title: "🎄 Christmas Wish Generator"
    },
    {
        key: "mothers",
        title: "💐 Mother's Day Wish Generator"
    },
    {
        key: "newyear",
        title: "🎆 New Year's Wish Generator"
    },
    {
        key: "fathers",
        title: "👔 Father's Day Wish Generator"
    },
    {
        key: "holidays",
        title: "🎁 Holidays Generator"
    },
    {
        key: "easter",
        title: "🐣 Easter Generator"
    },
    {
        key: "eid",
        title: "☪️ Eid Generator"
    }
];

let currentThemeIndex = 0;

const birthdayWishes = [
    "Happy Birthday! Wishing you joy, laughter, and success this year.",
    "May your birthday be filled with unforgettable moments and endless smiles.",
    "Cheers to another year of adventures, happiness, and dreams coming true.",
    "To the most iconic person in the room—happy birthday! May this year bring you clarity, confidence, and celebrations big and small.",
"Happy Birthday! May every dream you have move one step closer to becoming reality.",
"Wishing you a year filled with laughter, unforgettable adventures, and people who truly appreciate you.",
"May today remind you how loved and appreciated you are. Have the most amazing birthday!",
"Cheers to another year of growth, happiness, and making beautiful memories.",
"Happy Birthday! Keep shining exactly the way you do. The world is brighter because of you.",
"Wishing you endless smiles, exciting opportunities, and all the cake you can handle!",
"May this birthday mark the beginning of your best chapter yet. You deserve every good thing coming your way.",
"To someone truly special: may your day be filled with love, laughter, and little magical moments.",
"Happy Birthday! Stay bold, stay kind, and never stop chasing what makes you happy."
];

const christmasWishes = [
    "Merry Christmas! May your home be filled with love and warmth.",
    "Wishing you peace, joy, and magical moments this festive season.",
     "Merry Christmas! May your heart be wrapped in love, your home be filled with laughter, and your days shine with the magic of the season.",
  "Wishing you a Christmas filled with warm hugs, cherished memories, and the joy of being surrounded by those who mean the most.",
  "May the lights of Christmas brighten your path, the love of family warm your heart, and the hope of the season stay with you all year long.",
  "This Christmas, may peace find your soul, kindness fill your days, and every little moment become a beautiful memory.",
  "Sending you love, joy, and endless blessings this Christmas. May your holiday be as wonderful and special as you are.",
  "May your Christmas sparkle with happiness, your heart overflow with gratitude, and your home echo with laughter and love.",
  "Here's to cozy nights, sweet traditions, and unforgettable moments. Wishing you a magical Christmas and a season full of joy.",
  "Merry Christmas! May every gift you receive remind you of how deeply you are loved and appreciated.",
  "May this beautiful season bring you comfort, hope, and countless reasons to smile. Wishing you a Christmas to remember.",
  "No matter where life takes you, may the spirit of Christmas fill your heart with peace, love, and endless happiness."
];

const mothersDayWishes = [
    "Happy Mother's Day! Thank you for your endless love and strength.",
    "Today we celebrate the incredible person you are. Happy Mother's Day!",
     "Happy Mother's Day! Thank you for your endless love, gentle strength, and the countless little ways you make life beautiful.",
  "To an amazing mother, your kindness and care have touched so many hearts. Wishing you a day filled with love and appreciation.",
  "Happy Mother's Day! May today remind you how deeply loved, valued, and cherished you truly are.",
  "Your love is the foundation of so many happy memories. Wishing you a Mother's Day as beautiful as your heart.",
  "Thank you for the warmth, wisdom, and unconditional love you share every day. Happy Mother's Day!",
  "To someone who gives so much and asks for so little in return, may your Mother's Day be filled with joy and peace.",
  "Wishing you flowers that never fade, smiles that never end, and a Mother's Day filled with the love you deserve.",
  "Happy Mother's Day! Your love has made the world brighter, kinder, and more beautiful for everyone around you.",
  "Today we celebrate your strength, your compassion, and your endless ability to make people feel loved. Happy Mother's Day!",
  "May your heart be as full as the love you've given throughout the years. Wishing you a truly wonderful Mother's Day."
];

const fathersDayWishes = [
    "Happy Father's Day! Your wisdom and kindness inspire us every day.",
    "Thank you for your guidance, support, and unwavering love.",
      "Happy Father's Day!Thank you for your strength, wisdom, and the quiet love that makes every day brighter.",
  "To an incredible father, thank you for always believing, guiding, and showing what true kindness looks like. Happy Father's Day!",
  "Wishing you a Father's Day filled with appreciation, laughter, and all the happiness you bring to those around you.",
  "Happy Father's Day! Your support, patience, and unwavering love are gifts that last a lifetime.",
  "Today we celebrate the amazing father you are and the countless ways you make life better for the people you love.",
  "To a dad who inspires through actions and leads with love, may your Father's Day be as wonderful as you are.",
  "Happy Father's Day! Thank you for the lessons, the laughter, and the memories that will always stay close to our hearts.",
  "Your love has been a steady light through every season of life. Wishing you a truly special Father's Day.",
  "May today remind you how deeply appreciated and loved you are. Happy Father's Day to someone truly extraordinary.",
  "Here's to the dads who protect, encourage, and love without limits. Wishing you a day filled with joy and pride."
];

const eidWishes = [
    "Eid Mubarak! May your heart and home be filled with peace and blessings.",
    "Wishing you and your family a joyful and prosperous Eid.",
      "Eid Mubarak! May this blessed day fill your heart with peace, your home with happiness, and your life with endless blessings.",
  "Wishing you and your loved ones a joyful Eid filled with gratitude, laughter, and beautiful moments together.",
  "May Allah's blessings surround you today and always. Eid Mubarak to you and your family!",
  "On this special occasion of Eid, may your prayers be answered and your heart be filled with hope and contentment.",
  "Eid Mubarak! May your days ahead be filled with love, success, and countless reasons to smile.",
  "May this Eid bring you closer to the people you love and fill your life with peace, kindness, and prosperity.",
  "Sending warm wishes for a blessed Eid. May your celebrations be joyful and your heart be filled with gratitude.",
  "As you celebrate Eid, may happiness enter your home, peace fill your soul, and blessings follow you throughout the year.",
  "Eid Mubarak! Wishing you strength, faith, and beautiful moments shared with family and friends.",
  "May the spirit of Eid inspire love, generosity, and hope in your heart today and always. Eid Mubarak!"
];
const happyholidayswish = [
    "Happy Holidays! Wishing you days filled with love, laughter, and the warmth of the people who matter most.",
  "May this holiday season bring peace to your heart, joy to your home, and beautiful memories to treasure forever.",
  "Sending you warm holiday wishes and hoping this special season fills your life with happiness and hope.",
  "Happy Holidays! May every moment be wrapped in kindness, every day shine with joy, and every memory be one to cherish.",
  "Wishing you a season filled with cozy moments, heartfelt laughter, and the company of those you love.",
  "May the spirit of the holidays bring you comfort, inspiration, and countless reasons to smile.",
  "No matter how you celebrate, may this holiday season surround you with love, peace, and happiness.",
  "Happy Holidays! May your days be bright, your heart be light, and the year ahead be full of wonderful possibilities.",
  "Here's wishing you a holiday season filled with gratitude, togetherness, and unforgettable moments with family and friends.",
  "May the magic of the holidays stay with you long after the season ends, bringing joy and hope wherever you go."
];
const happyeasterwish = [
     "Happy Easter! May this beautiful season fill your heart with hope, your home with joy, and your life with countless blessings.",
  "Wishing you an Easter filled with love, laughter, and precious moments shared with family and friends.",
  "May the promise of Easter bring you renewed strength, fresh beginnings, and happiness that lasts throughout the year.",
  "Sending warm Easter wishes your way. May your day be bright, peaceful, and filled with little moments that make you smile.",
  "Happy Easter! May your heart bloom with faith, kindness, and the joy of new possibilities.",
  "As flowers bloom and spring begins anew, may your life be filled with hope, love, and beautiful surprises.",
  "Wishing you an Easter as bright as the morning sun and as sweet as the memories you create with loved ones.",
  "May this Easter remind you that every new day is a chance for hope, love, and a fresh start.",
  "Happy Easter! May peace surround you, love guide you, and happiness stay with you every step of the way.",
  "Here's wishing you a joyful Easter filled with warmth, gratitude, and the beauty of life's simple blessings."
];
const happyNewYearWishes = [
      "Happy New Year! May this new chapter bring you happiness, exciting opportunities, and dreams that become reality.",
  "Here's to new beginnings, fresh adventures, and beautiful memories waiting to be made. Happy New Year!",
  "May the year ahead be filled with laughter, love, success, and countless moments that make your heart smile.",
  "Happy New Year! Leave behind what no longer serves you and step boldly into a year filled with hope and possibility.",
  "Wishing you twelve months of joy, fifty-two weeks of laughter, and three hundred and sixty-five days of happiness.",
  "As the New Year begins, may your heart be light, your goals be clear, and your journey be filled with wonderful surprises.",
  "Cheers to a fresh start and another chance to create the life you've always dreamed of. Happy New Year!",
  "May this New Year bring you strength for every challenge, courage for every opportunity, and love in every season.",
  "Happy New Year! May each day ahead bring you closer to happiness, peace, and everything you've been wishing for.",
  "A new year means a new story to write. May yours be filled with adventure, love, success, and unforgettable moments."
];

const wishesByTheme = {
    birthday: birthdayWishes,
    christmas: christmasWishes,
    mothers: mothersDayWishes,
    newyear: happyNewYearWishes,
    fathers: fathersDayWishes,
    holidays: happyholidayswish,
    easter: happyeasterwish,
    eid: eidWishes
};

function randomWish() {
    const wishes = wishesByTheme[themes[currentThemeIndex].key];
    return wishes[Math.floor(Math.random() * wishes.length)];
}

userName.addEventListener("input", () => {
    generateBtn.disabled = userName.value.trim() === "";
});

generateBtn.addEventListener("click", () => {

    displayName.textContent = userName.value.trim() + "!";

    wishText.textContent = randomWish();

    if (photoUpload.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e){
            resultImage.src = e.target.result;
            resultImage.style.display = "block";
            heartIcon.style.display = "none";
        }

        reader.readAsDataURL(photoUpload.files[0]);
    } else {
        resultImage.style.display = "none";
        heartIcon.style.display = "block";
    }

    pageOne.classList.remove("active");
    pageTwo.classList.add("active");
});

document.getElementById("anotherWishBtn").addEventListener("click", () => {
    wishText.textContent = randomWish();
});

document.getElementById("restartBtn").addEventListener("click", () => {
    pageTwo.classList.remove("active");
    pageOne.classList.add("active");

    userName.value = "";
    photoUpload.value = "";
    generateBtn.disabled = true;
});

document.getElementById("shareBtn").addEventListener("click", async () => {

    const shareMessage =
`✉️ Have you seen this? Your friend has sent you a special surprise birthday message!

👉 Open it here:
https://yourwebsite.com

Wishing you a day full of joy, laughter, and unforgettable memories! 🎉`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "A Special Birthday Surprise For You!",
                text: shareMessage
            });
        } catch (e) {}
    } else {
        navigator.clipboard.writeText(shareMessage);
        alert("Share message copied to clipboard!");
    }
});
