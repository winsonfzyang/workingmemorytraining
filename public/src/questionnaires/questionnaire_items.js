// AES
const aes_options = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
const aes_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26"];
const aes_description = [
    "Description",
    "I felt focused on the activity.",
    "I find it difficult to stay focused on the activity.",
    "I was aware of the ongoing activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>aware</span> refers to being aware of your experience during the activity)</span>",
    "I felt comfortable during the activity.",
    "I find myself doing the activity without paying attention.",
    "I felt bored by the activity.",
    "I felt motivated during the activity.",
    "I find myself preoccupied with other thoughts when I was doing the activity.",
    "I felt relaxed during the activity.",
    "When I was doing the activity, my mind wandered off often.",
    "I was easily distracted while doing the activity.",
    "The activity was enjoyable.",
    "I had to force myself to complete the activity.",
    "I rushed through the activity.",
    "I felt engaged in the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>engaged</span> refers to being immersed with the activity)</span>",
    "I can notice the experience I had during the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>experience</span> refers to any experience, be it physical, emotional etc.)</span>",
    "The goal of the activity was effortless." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>effortless</span> refers to having to exert little effort to reach the goal of the activity)</span>",
    "I find myself doing the activity automatically without awareness.",
    "I work hard to achieve the goal of the activity.",
    "I felt calm during the activity.",
    "I felt mental pressure to complete the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>mental pressure</span> refers to tension and stress)</span>",
    "I felt peaceful during the activity.",
    "The goal of the activity was easy to achieve.",
    "I felt nervous by the activity.",
    "I felt trapped by the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>trapped</span> refers to wanting the activity to end and be free but it is still ongoing)</span>",
    "My mind was clear during the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>clear mind</span> refers to being aware and focus on the activity, without distracting thoughts)</span>",

];
const aes_csv = [aes_qns, aes_description];