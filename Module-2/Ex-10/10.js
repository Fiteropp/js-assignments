"use strict"

const get_candidate_count = () => {
  return canditates = parseInt(prompt("Give a number of canditates"), 10)
}

const get_voters_count = () => {
  return canditates = parseInt(prompt("Give a number of voters"), 10)
}

const get_candidate_names = () => {
  count = get_candidate_count()
  canditates = []

  for (let x = 0; x < count; x++){
    c_name = prompt(`Name for candidate ${x}`)
    candidate = {
      name: c_name,
      votes: 0
    }
    canditates.push(candidate)
  }

  return canditates
}

const find_candidate = (candidate_name) => {
  return candidate.name === candidate_name
}

const get_votes = (candidates) => {
  voters = get_voters_count()

  for (x = 1; x < voters + 1; x++){
    input_done = false

    while (input_done != true) {
      name_prompt = prompt(`Voter number ${x}, Give a name you are voting for (availabe: ${candidates}): `)
      found_c = candidates.find(find_candidate(name_prompt))

      if (!found_c) {
        alert("This name is not in candidate list")
        continue

      } else {
        found_c.votes++
        input_done = true
      }

    }

  }
}


get
