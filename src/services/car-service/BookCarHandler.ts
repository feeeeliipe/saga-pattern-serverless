export const handler = async (event: any) => {
    const { failOnStep } = event;
    if (failOnStep === 'BookCarStep') {
        event.success = false;
    } else {
        event.success = true;
    }
    return event;
}