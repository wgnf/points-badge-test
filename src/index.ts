import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon => {
  switch ( true ) {
    case ( user.solutionCount >= 5 && user.solutionCount < 25 ):
      return Icon.BADGE_BRONZE;
    case ( user.solutionCount >= 25 && user.solutionCount < 50 ):
      return Icon.BADGE_SILVER;
    case ( user.solutionCount >= 50 ):
      return Icon.BADGE_GOLD;
    default:
      return Icon.DEFAULT;
    }
};
