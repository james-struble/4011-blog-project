import { Paper } from '@mui/material'
export const BlogPostView = ({
        id,
        title,
        body,
        author,
        date,
    }: any) => {
        return(
            <Paper elevation = {8} style={{width: '700px', marginTop: '10px', marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{ display:'flex', flexDirection: 'row'}}>
                    <span style={{marginLeft: '30px', display:'flex', fontSize: '30px', fontWeight: 'bold', marginTop: '10px', flex: '1'}}>{title}</span>
                    <span style={{marginTop: '10px', marginRight: '30px', fontSize: '15px'}}>{date}</span>
                </div>
                <hr style={{marginRight: '30px', marginLeft: '30px'}}/>
                <div style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px', display:'flex', marginLeft: '30px', marginRight: '30px', textAlign: 'left'}}>{body}</div>
                <div style={{fontSize: '25px', display:'flex', flexDirection: 'row-reverse', marginRight: '30px', marginBottom: '10px'}}>- {author}</div>
            </Paper>
        )
    }