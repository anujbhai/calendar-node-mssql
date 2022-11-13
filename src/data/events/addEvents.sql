INSERT INTO [dbo].[events]
(
  [UserId],
  [title],
  [description],
  [startDate],
  [startTime],
  [endDate],
  [endTime]
)
VALUES
(
  @userId,
  @title,
  @description,
  @startDate,
  @startTime,
  @endDate,
  @endTime
);

SELECT SCOPE_IDENTITY() AS id;
