import { Box, Button } from '@mui/material';

const CourseBox = () => {
    return ( 
        <Box component="span" sx={{ p: 2, border: '1px solid grey' }}>
            <Button style={{
                color: green
            }}>
                Subject
            </Button>
        </Box>
    );
}

export default CourseBox;