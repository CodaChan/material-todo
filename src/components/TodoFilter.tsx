import { FilterAlt, FilterAltOff } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

interface TodoFilterProps {
    onToggleFilter: (status: boolean) => void,
    hasFilter: boolean
}

export default function TodoFilter({ onToggleFilter, hasFilter }: TodoFilterProps) {
    return (
        <Tooltip title="Filter">
            <Fab
                aria-label="Filter"
                color="primary"
                onClick={() => onToggleFilter(!hasFilter)}
                sx={{
                    position: 'fixed',
                    bottom: 36,
                    left: { xs: '50%', sm: 36 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' }
                }}
            >
                <FilterAlt sx={{ display: hasFilter ? 'none' : 'inline-block' }} />
                <FilterAltOff sx={{ display: hasFilter ? 'inline-block' : 'none' }} />
            </Fab>
        </Tooltip>

    )
}
