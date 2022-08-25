

const elevator = ((status, floor, task) => {
    return {
        status: status,
        floor: floor,
        task_complete: task,
        timer: 15
    }
})

const busy = ((elevator) => {
    if (elevator.status === 'busy') return true;
    else return false;
})



describe('Elevator test', () =>{
    describe('Busy Elevator',  () => {
        describe('Basic Elevator',  () => {
            const busy_elevator = elevator('busy', 0, false);
            test('The elevator shows busy status', async ()=>{
                expect(busy_elevator.status).toBe('busy');
            })
        })

    })
});