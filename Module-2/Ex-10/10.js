"use strict";

const get_candidate_count = () => {
  let candidates_c = 0;
  return (candidates_c = parseInt(prompt("Give a number of candidates"), 10));
};

const get_voters_count = () => {
  let voters_c = 0;
  return (voters_c = parseInt(prompt("Give a number of voters"), 10));
};

const get_candidate_names = (candidates) => {
  let count = get_candidate_count();

  for (let x = 1; x < count+1; x++) {
    let c_name = prompt(`Name for candidate ${x}`);
    const candidate = {
      name: c_name,
      votes: 0,
    };
    candidates.push(candidate);
  }

  return candidates;
};

const get_votes = (candidates) => {
  let voters = get_voters_count();
  const candidateNames = candidates
    .map((candidate) => candidate.name)
    .join(", ");
  for (let x = 1; x < voters + 1; x++) {
    const name_prompt = prompt(
      `Voter number ${x}, Give a name you are voting for (availabe: ${candidateNames}): `,
    );
    if (name_prompt == "") {
      alert("Empty vote.");
      continue;
    }

    let found_c = candidates.find(
      (candidate) => candidate.name === name_prompt,
    );
    if (!found_c) {
      alert("This name is not in candidate list. ");
      continue;
    } else {
      found_c.votes++;
    }
  }

  return candidates;
};

const print_candidates = () => {
  let print_candidates = "";
  const max_votes_c = candidates.reduce((prev, current) =>
    prev && prev.votes > current.votes ? prev : current,
  );
  print_candidates += `The winner is ${max_votes_c.name} with ${max_votes_c.votes} votes <br>`;
  print_candidates += `results (${candidates.length} candidates): <br>`;
  for (let c of candidates) {
    print_candidates += ` ${c.name}: ${c.votes} votes <br>`;
  }

  return print_candidates;
};

const candidates = [];
get_candidate_names(candidates);
get_votes(candidates);
const bs = print_candidates(candidates);
document.getElementById("print-candidate-list").innerHTML = bs;
