# Battle Dev

- Contest : [Battle Dev](https://battledev.blogdumoderateur.com)

- Exercices of previous editions : [Isograd](https://www.isograd.com/FR/solutionconcours.php) (Look for "Battle Dev RegionsJobs" or "Battle Dev Hello Word")

## Codes

Codes for the previous Battle Dev editions

These codes were written after the competitions, without time limit. 😄

- [10th Edition (08/11/2017)](10th-edition/README.md)

- [11th Edition (27/03/2018)](11th-edition/README.md)

- [12th Edition (06/11/2018)](12th-edition/README.md)

- [13th Edition (26/03/2019)](13th-edition/README.md)

## My results

Based on the results I was able to find, among the people who finished at least one exercice.

(Because the results didn't always contains people who finished 0 exercises or didn't connect)

Edition                   | General            | Language (Node.js) | Exercices | Last answer (20h -> 22h)
------------------------- | ------------------ | ------------------ | --------- | ------------------------
10th Edition (08/11/2017) | 540 / 2043 (26.4%) | 40 / 198 (20.2%)   | 3 / 6     | 20:47:06
11th Edition (27/03/2018) | 253 / 2385 (10.6%) | 9 / 222 (4.1%)     | 4 / 6     | 21:47:35
12th Edition (06/11/2018) | 592 / 3900 (15.2%) | 50 / 304 (16.4%)   | 4 / 6     | 21:57:58
13th Edition (26/03/2019) | 164 / 3577 (4.6%)  | 6 / 408 (1.5%)     | 4 / 6     | 21:17:32

## How to use

### Install

```
git clone https://github.com/PerthuisQuentin/battle-dev.git
npm install
```

### Run tests

```
npm test
```

Options

```
--edition <string>
	Use a string as filter on editions

--exercice <string>
	Use a string as filter on exercices

--test <string>
	Use a string as filter on tests
```

Example

```
npm test -- --edition 12 --exercice 3 --test 2
```