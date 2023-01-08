import React from 'react';
import styles from '../../assets/styles/helpers/TaskForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import {
  MenuItem,
  Box,
  Button,
  Select,
  Slider,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { iconData } from '../helpers/icons';
import { marks, minuteMarks } from '../helpers/constants';
import { FormValues } from '../helpers/typings';

interface TaskProps {
  newTaskHandler: (data: object) => void;
  changedTaskHandler: (data: object, id: number) => void;
  preloadedValues: FormValues;
  handleExit(): void;
}

const TaskForm: React.FC<TaskProps> = ({
  newTaskHandler,
  changedTaskHandler,
  preloadedValues,
  handleExit,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormValues>({
    shouldUnregister: true,
    defaultValues: preloadedValues,
  });
  const handleClick = (data) => {
    preloadedValues
      ? changedTaskHandler(data, preloadedValues.id)
      : newTaskHandler(data);
    reset(data);
    handleExit();
  };

  const onSubmit = (data) => handleClick(data);

  const displayIcon = (value) => {
    if (value) {
      const object = iconData.find((el) => el.id === value);
      const Svg = object.Image;
      return <Svg className={styles.svgIcon} />;
    }
  };
  return (
    <Box className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.inputsContainer}>
          <Box className={styles.iconBigContainer}>
            <Controller
              control={control}
              name="icon"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Box className={styles.iconContainer}>
                  <Avatar
                    sx={{ width: 200, height: 200, backgroundColor: '#B3B1B9' }}
                  >
                    {displayIcon(value)}
                  </Avatar>
                  <Typography variant="h5" fontWeight={400}>
                    Select icon
                  </Typography>
                  <Select
                    value={value || ''}
                    onChange={onChange}
                    sx={{ color: 'black', height: '45px', minWidth: '80%' }}
                  >
                    {iconData &&
                      iconData.map((el) => (
                        <MenuItem
                          sx={{ color: 'black' }}
                          value={el.id}
                          defaultValue=""
                          key={el.id}
                        >
                          {el.title}
                        </MenuItem>
                      ))}
                  </Select>
                </Box>
              )}
            />
            <Box>
              {errors.icon && (
                <Typography variant="caption">Icon is required.</Typography>
              )}
            </Box>
          </Box>

          <Box className={styles.textContainer}>
            {' '}
            <Typography variant="h5" fontWeight={400}>
              Title
            </Typography>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value || ''}
                  inputProps={{ maxLength: 20 }}
                  className={styles.textField}
                />
              )}
            />
            <Box>
              {errors.title && (
                <Typography variant="caption">Please add title.</Typography>
              )}
            </Box>
            <Typography variant="h5" fontWeight={400}>
              Time
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              Hours
            </Typography>
            <Controller
              control={control}
              name="hours"
              rules={{ required: true }}
              render={({ field: { value, ...field } }) => (
                <Slider
                  {...field}
                  onChange={(value) => field.onChange(value)}
                  valueLabelDisplay="auto"
                  value={value || 0}
                  max={24}
                  step={1}
                  marks={marks}
                  classes={{ markLabel: styles.mark }}
                />
              )}
            />
            <Box>
              {errors.hours && (
                <Typography variant="caption">
                  Please select the amount of hours.
                </Typography>
              )}
            </Box>
            <Typography variant="body1" fontWeight={400}>
              Minutes
            </Typography>
            <Controller
              control={control}
              name="minutes"
              rules={{ required: true }}
              render={({ field: { value, ...field } }) => (
                <Slider
                  {...field}
                  onChange={(value) => field.onChange(value)}
                  valueLabelDisplay="auto"
                  // key={`slider2-${value}`}
                  value={value || 0}
                  max={59}
                  step={1}
                  marks={minuteMarks}
                  classes={{ markLabel: styles.mark }}
                />
              )}
            />
            <Box>
              {errors.minutes && (
                <Typography variant="caption">
                  Please select the amount of minutes.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box className={styles.buttonBox}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleExit()}
          >
            Exit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TaskForm;
