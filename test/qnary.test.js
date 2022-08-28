

const elevator = ((status, floor, task, user) => {
    if (user === undefined && status == 'busy') {
        throw new Error('Internal user not defined for busy elevator')
    }
    return {
        status: status,
        floor: floor,
        task_complete: task,
        timer: 15,
        user: user
    }
})

const isBusy = ((elevator) => {
    if (elevator.status === 'busy') return true;
    else return false;
})

const callElevator = ((user, floor, elevator) => {
    const busy = isBusy(elevator);
    busy.status
    if (busy) return false;
    else {
        return { ...elevator, ...{ status: 'busy', task_complete: false, user: user, floor: floor } }
    }
})

const selectFloor = ((user, floor, elevator) => {
    if (!user == elevator.user) return false;
    else {
        return { ...elevator, ...{ floor: floor } }
    }
})


describe('Elevator test', () => {
    describe('Busy Elevator', () => {
        describe('Basic Elevator', () => {
            const busy_elevator = elevator('busy', 0, false, 'Metodi');
            test('The elevator shows busy status', async () => {
                expect(busy_elevator.status).toBe('busy');
            })
            test('The elevator shows exact location', async () => {
                expect(busy_elevator.floor).toBe(0);
            })
        })
        describe('External user Basic', () => {
            const busy_elevator = elevator('busy', 0, false, 'Metodi');
            test('An external user can not call the elevator', async () => {
                const elevator = callElevator('Luca', 7, busy_elevator)
                expect(elevator).toBe(false);
            })
        })
    })
    describe('Available Elevator', () => {
        describe('Basic Elevator', () => {
            const available_elevator = elevator('available', 0, false);
            test('The elevator shows available status', async () => {
                expect(available_elevator.status).toBe('available');
            })
            test('The elevator shows exact location', async () => {
                expect(available_elevator.floor).toBe(0);
            })
        })
        describe('User Basic', () => {
            const available_elevator = elevator('available', 0, false);
            let busy_elevator;
            test('An user can call the elevator', async () => {
                const elevator = callElevator('Luca', 7, available_elevator);
                expect(elevator).not.toBeFalsy;
                expect(elevator.status).toBe('busy');
                busy_elevator = elevator
            })
            test('After the elevator arrives to the floor, only the user who made the call can select the desire floor', async () => {
                let elevator = selectFloor('Metodi', 5, busy_elevator);
                expect(elevator).toBeFalsy;
                elevator = selectFloor('Luca', 5, busy_elevator)
                expect(elevator.floor).toBe(5);
                busy_elevator = elevator;
            })


        })

    })
});

describe ('Not ok ramdon test', () => {
    test('Bad sum', async () =>{
        reporter
        .description("Feature should work cool")
        .severity(Severity.Critical)
        .feature(Feature.Betting)
        .story("BOND-007");

        expect(3+5).toBe(9);
    })

    test('Bad div', async () =>{
        expect(10/5).toBe(2.5);
    })

    
})

describe('Test for reporter', () =>{
    test('Test 1', async ()=>{
        expect(1).toBe(1);
    })
    test('Test 1', async ()=>{
        expect(1).toBe(2);
    })
})