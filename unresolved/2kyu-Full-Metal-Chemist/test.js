Test.describe('Basic tests', () => {
    Test.it('Constructors', () => {
        var m = new Molecule
        Test.assertEquals(m.name, '', 'Should define the empty string as default name')

        m = new Molecule('banana')
        Test.assertEquals(m.name, 'banana', 'Even if...')
    })

    Test.it('Simple carbohydrates', () => {
/* methane:
  H
  |
H-C-H   <=>  CH4
  |
  H
*/
        var methane = new Molecule("methane").brancher(1).closer()
        Test.assertEquals(methane.formula, 'CH4')
        Test.assertEquals(methane.molecularWeight, 16)


/* octane:
CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3
*/
        var octane = new Molecule('octane').brancher(8).closer()
        Test.assertEquals(octane.formula, 'C8H18')
        Test.assertEquals(octane.molecularWeight, 114)
    })
})

const str = it => it.toString()

Test.describe('Atom class specifications (using methane)', () => {

    const methane = new Molecule('methane').brancher(1).closer()
    const atoms = methane.atoms

    Test.it("'element' and 'id' properties", () => {
        Test.assertEquals(atoms.length, 5, 'Wrong number of atoms')

        ;[...'CHHHH'].forEach((elt, x) => {
            Test.assertEquals(atoms[x].element, elt, `Wrong atom at the index ${x} in self.atoms`)
            Test.assertEquals(atoms[x].id, x + 1, `Wrong id value ${x + 1} in self.atoms`)
        })
    })

    Test.it('toString() implementation: basics', () => {
        Test.assertEquals(str(atoms[0]), 'Atom(C.1: H,H,H,H)')
        Test.assertEquals(str(atoms[atoms.length - 1]), 'Atom(H.5: C1)')
    })
})



const extractNoneHToStr = m => m.atoms.filter(it => it.element != 'H').map(str)

const testThisMolecule = (m, formula, mm, strNoH) => {
    Test.assertEquals(m.formula, formula, 'Testing raw formula')
    Test.assertEquals(m.molecularWeight, mm, 'Testing molecular weight')
    Test.assertDeepEquals(extractNoneHToStr(m), strNoH, 'Checking bonds (for non-hydrogens)')
}




Test.describe('Create carbohydrates and bound them correctly (id tracking, raw formula and molecular weight tested)', () => {

const config = [

[/* cyclohexane:
CH2-CH2-CH2
|       |
CH2-CH2-CH2
*/,
'cyclohexane',
[6],
[[1,1,6,1]],
'C6H12',
84,
['Atom(C.1: C2,C6,H,H)', 'Atom(C.2: C1,C3,H,H)', 'Atom(C.3: C2,C4,H,H)', 'Atom(C.4: C3,C5,H,H)', 'Atom(C.5: C4,C6,H,H)', 'Atom(C.6: C1,C5,H,H)']],


[/* 1,1-dimethyl-2-propylcyclohexane:
            CH3   CH3
               \ /
CH3-CH2-CH2-CH2-CH2-CH2
            |       |
            CH2-CH2-CH2
*/,
'2-propyl-1,1-dimethylcyclohexane',
[9,1,1],
[[4,1,9,1], [5,1,1,2], [5,1,1,3]],
'C11H22',
154,
['Atom(C.1: C2,H,H,H)', 'Atom(C.2: C1,C3,H,H)', 'Atom(C.3: C2,C4,H,H)', 'Atom(C.4: C3,C5,C9,H)', 'Atom(C.5: C4,C6,C10,C11)', 'Atom(C.6: C5,C7,H,H)', 'Atom(C.7: C6,C8,H,H)', 'Atom(C.8: C7,C9,H,H)', 'Atom(C.9: C4,C8,H,H)', 'Atom(C.10: C5,H,H,H)', 'Atom(C.11: C5,H,H,H)']],


[/* cubane (something like that, with one more 'CH' group at the back of the cube...):
       CH-----CH
      /      /|
     /      / |
    CH-----CH CH
    |      | /
    |      |/
    CH-----CH
*/,'cubane - one branch',
[8],
[[3,1,6,1], [2,1,7,1], [1,1,8,1], [4,1,1,1], [5,1,8,1]],
'C8H8',
104,
['Atom(C.1: C2,C4,C8,H)', 'Atom(C.2: C1,C3,C7,H)', 'Atom(C.3: C2,C4,C6,H)', 'Atom(C.4: C1,C3,C5,H)', 'Atom(C.5: C4,C6,C8,H)', 'Atom(C.6: C3,C5,C7,H)', 'Atom(C.7: C2,C6,C8,H)', 'Atom(C.8: C1,C5,C7,H)']],


[/* cubane again: same than the one above!
*/,
'cubane - two branches',
[4,4],
[[1,1,4,1], [1,2,4,2], [1,1,1,2], [2,1,2,2], [3,1,3,2], [4,1,4,2]],
'C8H8',
104,
['Atom(C.1: C2,C4,C5,H)', 'Atom(C.2: C1,C3,C6,H)', 'Atom(C.3: C2,C4,C7,H)', 'Atom(C.4: C1,C3,C8,H)', 'Atom(C.5: C1,C6,C8,H)', 'Atom(C.6: C2,C5,C7,H)', 'Atom(C.7: C3,C6,C8,H)', 'Atom(C.8: C4,C5,C7,H)']],

[/* benzene:
 CH-CH
//   \\
CH    CH
\    /
 CH=CH
*/,
'benzene: double bonds',
[2,2,2],
[[1,1,2,1], [1,2,2,2], [1,3,2,3], [2,1,1,2], [2,2,1,3], [2,3,1,1]],
'C6H6',
78,
['Atom(C.1: C2,C2,C6,H)', 'Atom(C.2: C1,C1,C3,H)', 'Atom(C.3: C2,C4,C4,H)', 'Atom(C.4: C3,C3,C5,H)', 'Atom(C.5: C4,C6,C6,H)', 'Atom(C.6: C1,C5,C5,H)']],

]
    config.forEach(([_, name, branch, bonds, formula, mm, carbToStr]) => {
        Test.it(name, () => {
            const m = new Molecule(name).brancher(...branch).bounder(...bonds).closer()
            testThisMolecule(m, formula, mm, carbToStr)
        })
    })
})





Test.describe('Mutating, adding and valence numbers consistencies', () => {

const config = [
[/* Furane:
    O
  /   \
CH     CH
 \\   //
  CH-CH
*/,
'Furane: no additional hydrogens while closing after mutation',
[5],
[[5,1,1,1], [5,1,4,1], [2,1,3,1]],
[[1,1,'O']],
'C4H4O',
68,
['Atom(O.1: C2,C5)', 'Atom(C.2: C3,C3,O1,H)', 'Atom(C.3: C2,C2,C4,H)', 'Atom(C.4: C3,C5,C5,H)', 'Atom(C.5: C4,C4,O1,H)']],


[/* isopropylmagnesium bromide:
CH3
  \
   CH-Mg-Br
  /
CH3
*/,
'isopropylmagnesium bromide',
[4, 1],
[[2,1,1,2]],
[[3,1,'Mg'], [4,1,'Br']],
'C3H7BrMg',
147.3,
['Atom(C.1: C2,H,H,H)', 'Atom(C.2: C1,C5,Mg3,H)', 'Atom(Mg.3: C2,Br4)', 'Atom(Br.4: Mg3)', 'Atom(C.5: C2,H,H,H)']]
]

    config.forEach(([_, name, branch, bonds, mut, formula, mm, carbToStr]) => {
        Test.it(name, () => {
            console.log({name, branch, bonds, mut, formula, mm, carbToStr});
            const m = new Molecule(name).brancher(...branch).bounder(...bonds).mutate(...mut).closer()
            testThisMolecule(m, formula, mm, carbToStr)
        })
    })
})


Test.describe('Fail when it should, building molecules', () => {

    Test.it('Invalid basic builds', () => {

const config = [
['No self-bonding',
[6],
[[1,1,1,1]]],

['Should fail when exceeding the valence number adding new alkyls to the same atom',
[3,1,1,1],
[[2,1,1,2], [2,1,1,3], [2,1,1,4]]],

['Should fail when exceeding the valence number with multiple bonds',
[4],
[[2,1,3,1], [2,1,3,1], [2,1,3,1]]],

]
        config.forEach(([descript, branch, bonds]) => {
            Test.expectError(descript, () => {
                new Molecule('').brancher(...branch).bounder(...bonds).closer()
            })
        })
    })
})



Test.describe('Invalid mutations and additions', () => {

const config = [
['Should fail when mutating a carbon with three atoms already linked to an oxygen',
[3,1],
[[2,1,1,2]],
'mutate', [2,1,'O']],

['Should fail when mutating a carbon with two double bonds to nitrogen',
[3],
[[1,1,2,1], [3,1,2,1]],
'mutate', [2,1,'N']],

['Should fail when adding a new hydrogen to a carbon with already 4 bonds',
[3],
[[1,1,2,1], [3,1,2,1]],
'add', [2,1,'H']],


['Should fail when mutating an atom and then adding too much atoms on it',
[3],
[[1,1,2,1]],
'mutadd', [[2,1,'N'], [2,1,'O']]],

]
    config.forEach(([descript, branch, bonds, mutadd, inp]) => {
        const m = new Molecule('').brancher(...branch).bounder(...bonds)
        var func
        if (mutadd === 'mutate') func = () => m.mutate(inp).closer()
        else if (mutadd === 'add') func = () => m.add(inp).closer()
        else if (mutadd === 'mutadd') func = () => m.mutate(inp[0]).add(inp[1]).closer()
        else throw new Error('Wrong configuration of the tests')

        Test.it(descript, () => {
            Test.expectError('Should have fail', func)
        })
    })
})
